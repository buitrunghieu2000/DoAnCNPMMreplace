import React from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUser } from "../../../features/user/slice/selector";
import { getAllUserAsync } from "../../../features/user/slice/thunk";
import "./style.scss";

interface IEportBillProps {}

const IEportBill = (props: IEportBillProps) => {
  const dispatch = useDispatch();

  const allUser = useSelector(selectAllUser) || [];
  React.useEffect(() => {
    dispatch(getAllUserAsync({ skip: 1, limit: 10, role: 0 }));
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <div className="IEportBill container">
      <div className="container">
        <button className="btn btn-primary py-3 px-4">ADD</button>
        <div className="row">
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.timviec.com.vn/2020/08/voucher-la-gi-4.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.timviec.com.vn/2020/08/voucher-la-gi-4.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.timviec.com.vn/2020/08/voucher-la-gi-4.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.timviec.com.vn/2020/08/voucher-la-gi-4.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IEportBill;
