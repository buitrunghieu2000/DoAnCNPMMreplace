import React, { useState } from "react";
import { getAllCartAsync } from "../../../../apis/cart/getallcart.api";
import { SelectCustom } from "../../../../components/Select";
import { moneyFormater } from "../../../../utils/moneyFormater";

interface Props {}

const CheckoutInfo = (props: Props) => {
  const [cartList, setCartList] = useState<any>([]);

  React.useEffect(() => {
    (async () => {
      const result = await getAllCartAsync();
      const { data } = result;
      if (result.statusCode === 200) setCartList(data);
    })();
  }, []);
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 ftco-animate">
              <form action="#" className="billing-form">
                <h3 className="mb-4 billing-heading">Billing Details</h3>
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Delivery Address</label>
                      <SelectCustom />
                    </div>
                  </div>
                </div>

                <label>List items</label>
                <div className="cart-detail cart-total p-3 p-md-4">
                  <div className="row">
                    <div className="col-md-12 ftco-animate">
                      <div className="cart-list">
                        <table className="table">
                          <thead className="thead-primary">
                            <tr className="text-center">
                              <th>Product imgage</th>
                              <th>Product name</th>
                              <th>Weight</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartList.map((e: any, i: number) => (
                              <tr className="text-center">
                                <td className="image-prod">
                                  <div
                                    className="img"
                                    style={{
                                      backgroundImage: `url(${e.image[0]})`,
                                    }}
                                  ></div>
                                </td>

                                <td
                                  className="product-name"
                                  style={{ margin: "auto" }}
                                >
                                  <h3>{e.name}</h3>
                                </td>
                                <td className="product-weight">
                                  <h3>{e.weight} kg</h3>
                                </td>

                                <td className="price">
                                  {moneyFormater(e.cost)}
                                </td>

                                <td className="quantity">
                                  <div className="input-group mb-3">
                                    <input
                                      type="number"
                                      name="quantity"
                                      className="quantity form-control input-number"
                                      defaultValue={e.quantity}
                                      min="1"
                                      max="100"
                                      style={{ textAlign: "center" }}
                                    />
                                  </div>
                                </td>

                                <td className="total">
                                  {moneyFormater(e.totalCost)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-5">
              <div className="row mt-5 pt-3">
                <div className="col-md-12 d-flex mb-5">
                  <div className="cart-detail cart-total p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Cart Total</h3>
                    <p className="d-flex">
                      <span>Subtotal</span>
                      <span>$20.60</span>
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
                </div>
                <div className="col-md-12">
                  <div className="cart-detail p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Payment Method</h3>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                            />{" "}
                            COD
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                            />{" "}
                            VN Pay
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                            />{" "}
                            Paypal
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" className="mr-2" /> I have
                            read and accept the terms and conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    <p>
                      <a href="#" className="btn btn-primary py-3 px-4">
                        Place an order
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutInfo;
