import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { createRatingApi } from "../../../../apis/rate/createRating.api";
import { ButtonSpinner } from "../../../../components/ButtonSpinner";
import { ModalLMS } from "../../../../components/Modal";
import { selectDetailOrder } from "../../../../features/order/slice/selector";
import { moneyFormater } from "../../../../utils/moneyFormater";
import { notifyError, notifySuccess } from "../../../../utils/notify";
import { Rating } from "react-simple-star-rating";

interface Props {
  cancel: Function;
  open: boolean;
}

const ModalOrderDetail = (props: Props) => {
  const order = useSelector(selectDetailOrder);

  return (
    <div>
      {props.open ? (
        <ModalLMS title="Order Detail" withHeader={true} cancel={props.cancel}>
          {order?.product?.map((item: any, i: number) => (
            <div className="card mb-3" key={i}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item?.image[0]}
                    className="img-fluid rounded-start "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item?.name}</h5>
                    <p className="card-text">{`Quantity: ${item?.quantity}`}</p>
                    <p className="card-text">{`Weight: ${item?.weight} kg`}</p>
                    <p className="card-text">{`Price: ${moneyFormater(
                      item?.price
                    )}`}</p>
                    {order?.status === 3 && (
                      <RatingForm
                        orderId={order._id}
                        productId={item.productId}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ModalLMS>
      ) : (
        <></>
      )}
    </div>
  );
};

const RatingForm = (props: { orderId: string; productId: string }) => {
  const [rating, setRating] = useState(100);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const submit = async (data: any, e: any) => {
    e.preventDefault();
    data.orderId = props.orderId;
    data.productId = props.productId;
    data.star = rating / 20;
    console.log(data);
    const Arr = [data];
    const result = await createRatingApi(Arr);
    if (result.statusCode === 200) {
      notifySuccess("Rating successfully");
      reset();
    } else {
      notifyError("Rating Failed, Product has already been rated");
    }
  };

  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit(submit)}>
        <span>Rating:</span> {""}
        <Rating
          initialValue={rating}
          onClick={handleRating}
          ratingValue={rating} /* Available Props */
          allowHalfIcon
        />
        <p></p>
        <div className="form-group">
          <textarea
            defaultValue=""
            {...register("content")}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Comment"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          style={{ backgroundColor: "#82ae46" }}
        >
          {!isSubmitting ? "Submit" : <ButtonSpinner />}
        </button>
      </form>
    </>
  );
};
export default ModalOrderDetail;
