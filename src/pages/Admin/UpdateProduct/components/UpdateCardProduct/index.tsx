import React, { useState } from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { createCartAsync } from "../../../../../apis/cart/createcart.api";
import { notifySuccess } from "../../../../../utils/notify";
import { moneyFormater } from "../../../../../utils/moneyFormater";
import ModalUpdateProduct from "../ModalUpdateProduct";

const UpdateCardProduct = (props: { data?: any }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handdleOpen = () => {
    setOpen(true);
  };
  const handdleCancel = () => {
    setOpen(false);
  };

  const handleClickSingleProduct = (id: string) => {
    history.push(`/singleproduct/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="product">
      <Link to={`/singleproduct/${props?.data?._id}`} className="img-prod">
        <img
          className="img-fluid"
          src={props.data?.image[0]}
          alt="Colorlib Template"
        />
        <div className="overlay"></div>
      </Link>
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
              onClick={handdleOpen}
              className="
												buy-now
												d-flex
												justify-content-center
												align-items-center
												mx-1
											"
            >
              <span>
                <IoMdAddCircleOutline />
              </span>
            </button>
          </div>
        </div>
      </div>
      <ModalUpdateProduct
        open={open}
        cancel={handdleCancel}
        id={props.data?._id}
      />
    </div>
  );
};

export default UpdateCardProduct;
