import dayjs from "dayjs";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { getAllIEBILLApi } from "../../../apis/iebill/getALLIEBill.api";
import { moneyFormater } from "../../../utils/moneyFormater";
import "./style.scss";

interface IEportBillProps {}

const IEportBill = (props: IEportBillProps) => {
  const [bill, setBill] = useState<any>([]);
  const [billDetail, setBillDetail] = useState<any>(undefined);
  const history = useHistory();
  const params = {
    skip: 1,
    limit: 15,
  };

  React.useEffect(() => {
    (async () => {
      const result = await getAllIEBILLApi(params);
      setBill(result.data);
    })();
  }, []);

  const handleChangePage = () => {
    history.push("/iebill/createiebill");
  };
  return (
    <div className="IEportBill container">
      <div className="container">
        {billDetail ? (
          <div className="">
            <button
              className="btn btn-primary"
              onClick={() => setBillDetail(undefined)}
            >
              Back
            </button>
            <div className="row">
              {billDetail.history.map((item: any, index: number) => (
                <div className="col-3" key={index}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://wexpo.vn/wp-content/uploads/2020/06/Amazon-import-export.jpg"
                    />

                    <Card.Body>
                      <h5 style={{ fontWeight: "bolder" }}>{item.name}</h5>
                      <Card.Text>Kho: {item.quantity}</Card.Text>
                      <Card.Text
                        style={{
                          fontWeight: "bold",
                          textDecoration: "line-through",
                        }}
                      >
                        {moneyFormater(item.price)}
                      </Card.Text>
                      <Card.Text
                        style={{ color: "#006400", fontWeight: "bold" }}
                      >
                        {moneyFormater(item.priceDiscount)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {" "}
            <button onClick={handleChangePage} className="btn btn-primary">
              ADD
            </button>
            <div className="row">
              {bill.map((item: any, index: number) => (
                <div className="col-3" key={index}>
                  <Card
                    style={{ width: "18rem" }}
                    onClick={() => setBillDetail(item)}
                  >
                    {/* <Link to="/"> */}
                    <Card.Img
                      variant="top"
                      src="https://wexpo.vn/wp-content/uploads/2020/06/Amazon-import-export.jpg"
                    />
                    {/* </Link> */}

                    <Card.Body>
                      <h5 style={{ fontWeight: "bolder" }}>
                        Phiếu nhập/xuất kho
                      </h5>
                      <Card.Text>
                        {dayjs(item.updatedAt).format("HH:mm:ss")}
                      </Card.Text>
                      <Card.Text>
                        {dayjs(item.updatedAt).format("DD/MM/YYYY")}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IEportBill;
