import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteCartAsync } from "../../../../apis/cart/deletecart.api";
import { getAllCartAsync } from "../../../../apis/cart/getallcart.api";
import { updateCartAsync } from "../../../../apis/cart/updatecart.api";
import { moneyFormater } from "../../../../utils/moneyFormater";
import { notifySuccess } from "../../../../utils/notify";

interface Props {}

const CartInfo = (props: Props) => {
  const [cartList, setCartList] = useState<any>([]);

  const handleRemoveFromCart = async (id: string, index: number) => {
    const result = await deleteCartAsync({ id });
    console.log(result);
    if (result.statusCode === 200) {
      notifySuccess("Item removed from cart");
      document.getElementById(`text-center-${index}`)?.remove();
    }
  };

  const handleChangeQuantity = (changeQuantity: number, id: string) => {
    setCartList(
      [...cartList].map((e: any) => {
        if (e._id === id) {
          return { ...e, quantity: changeQuantity };
        } else {
          return e;
        }
      })
    );
  };

  React.useEffect(() => {
    (async () => {
      const result = await getAllCartAsync();
      const { data } = result;
      console.log(data);
      if (result.statusCode === 200) setCartList(data);
      console.log(
        cartList?.reduce(
          (prev: any, current: any) =>
            prev.quantity * prev.cost + current.quantity * current.cost
        )
      );
    })();
  }, []);

  return (
    <div>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>Image</th>
                      <th>Product name</th>
                      <th>Weight</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList.map((e: any, i: number) => (
                      <tr
                        id={`text-center-${i}`}
                        key={i}
                        className="text-center"
                      >
                        <td className="product-remove">
                          <button
                            onClick={() => handleRemoveFromCart(e._id, i)}
                          >
                            X
                          </button>
                        </td>
                        <td className="image-prod">
                          <div
                            className="img"
                            style={{
                              backgroundImage: `url(${e.image[0]})`,
                            }}
                          ></div>
                        </td>

                        <td className="product-name">
                          <h3>{e.name}</h3>
                        </td>
                        <td>{e.weight} kg</td>
                        <td className="price">{moneyFormater(e.cost)}</td>

                        <td className="quantity">
                          <div className="input-group mb-3">
                            <input
                              onKeyDown={(e: any) => e.preventDefault()}
                              type="number"
                              name="quantity"
                              className="quantity form-control input-number"
                              defaultValue={e.quantity}
                              min="1"
                              max="100"
                              onChange={(event: any) =>
                                handleChangeQuantity(event.target.value, e._id)
                              }
                            />
                          </div>
                        </td>

                        <td className="total">
                          {moneyFormater(e.quantity * e.cost)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>
                    {cartList.length != 0 &&
                      moneyFormater(
                        (cartList || []).reduce(
                          (prev: any, current: any) =>
                            prev + current.cost * current.quantity,
                          0
                        )
                      )}
                  </span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>$17.60</span>
                </p>
              </div>
              <p>
                <Link to="/checkout" className="btn btn-primary py-3 px-4">
                  Proceed to Checkout
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartInfo;
