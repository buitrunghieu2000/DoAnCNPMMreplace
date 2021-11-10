import React from "react";
import { IoIosCart } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi";
import { createCartAsync } from "../../apis/cart/createcart.api";
import { moneyFormater } from "../../utils/moneyFormater";
import { notifySuccess } from "../../utils/notify";
import { getDetailProductAsync } from "../../apis/product/getdetailproduct.api";
import { useHistory } from "react-router";

const CardProduct = (props: { data?: any }) => {
  const history = useHistory();
  const handleAddToCart = async () => {
    const result = await createCartAsync({
      productId: props.data?._id,
      quantity: 1,
    });
    if (result.statusCode === 200) {
      notifySuccess(`Added ${result.data.name} to cart`);
    }
  };

  const handleClickSingleProduct = (id: string) => {
    history.push(`/singleproduct/${id}`);
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <div className="product">
      <a
        onClick={() => handleClickSingleProduct(props.data?._id)}
        className="img-prod"
      >
        <img
          className="img-fluid"
          src={props.data?.image[0]}
          alt="Colorlib Template"
        />
        <div className="overlay"></div>
      </a>
      <div className="text py-3 pb-4 px-3 text-center">
        <h3>
          <a href="#">{props.data?.name}</a>
        </h3>
        <div className="d-flex">
          <div className="pricing">
            <p className="price">
              <span>{moneyFormater(props.data?.price || 0)}</span>
            </p>
          </div>
        </div>
        <div className="bottom-area d-flex px-4">
          <div className="m-auto d-flex">
            <button
              onClick={handleAddToCart}
              className="
												buy-now
												d-flex
												justify-content-center
												align-items-center
												mx-1
											"
            >
              <span>
                <IoIosCart />
              </span>
            </button>
            <button
              className="
												heart
												d-flex
												justify-content-center
												align-items-center
											"
            >
              <span>
                <HiOutlineHeart />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
