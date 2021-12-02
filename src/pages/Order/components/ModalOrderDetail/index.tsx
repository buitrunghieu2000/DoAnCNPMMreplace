import React from "react";
import { useSelector } from "react-redux";
import { ModalLMS } from "../../../../components/Modal";
import { selectDetailOrder } from "../../../../features/order/slice/selector";
import { moneyFormater } from "../../../../utils/moneyFormater";

interface Props {
  cancel: Function;
  open: boolean;
}

const ModalOrderDetail = (props: Props) => {
  const order = useSelector(selectDetailOrder);
  console.log(order);
  console.log(order.product);

  return (
    <div>
      {props.open ? (
        <ModalLMS title="Order Detail" withHeader={true} cancel={props.cancel}>
          <div className="card mb-3">
            {order?.product?.map((item: any, i: number) => (
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
                    <p className="card-text">{`Price: ${moneyFormater(
                      item?.price
                    )}`}</p>
                  </div>
                </div>
                <p></p>
                <hr></hr>
              </div>
            ))}
          </div>
        </ModalLMS>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ModalOrderDetail;
