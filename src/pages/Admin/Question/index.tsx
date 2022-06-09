import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUser } from "../../../features/user/slice/selector";
import { getAllUserAsync } from "../../../features/user/slice/thunk";
import ModalQuestion from "./components/ModalInfo";
import "./style.scss";

interface QuestionProps {}

const Question = (props: QuestionProps) => {
  // const dispatch = useDispatch();

  // const allUser = useSelector(selectAllUser) || [];
  // React.useEffect(() => {
  //   dispatch(getAllUserAsync({ skip: 1, limit: 10, role: 0 }));
  // }, []);
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    setOpen(false);
  };

  const { t, i18n } = useTranslation();
  return (
    <div className="Question container">
      <div className="container">
        <button
          className="btn btn-primary py-3 px-4"
          onClick={() => {
            setOpen(true);
          }}
        >
          ADD
        </button>
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
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitches"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitches"
                  ></label>
                </div>
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
        <ModalQuestion open={open} cancel={handleCancel} />
      </div>
    </div>
  );
};

export default Question;
