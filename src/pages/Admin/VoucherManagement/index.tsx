import dayjs from "dayjs";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";

import { DeleteVoucherApi } from "../../../apis/discount/deleleVoucher.api";
import { getAllDiscountApi } from "../../../apis/discount/getAllDisCount.api";
import { moneyFormater } from "../../../utils/moneyFormater";
import { notifyError, notifySuccess } from "../../../utils/notify";
import "./style.scss";

interface VoucherManagementProps {}

const VoucherManagement = (props: VoucherManagementProps) => {
  const history = useHistory();
  const [discount, setDiscount] = useState<any>([]);

  React.useEffect(() => {
    (async () => {
      const result = await getAllDiscountApi();
      const { data } = result;
      setDiscount(data);
    })();
  }, [discount]);
  const handleDeleteVoucher = async (id: string) => {
    const result = await DeleteVoucherApi({ id });
    if (result.statusCode === 200) {
      const newListVoucher = discount.map((item: any) => item._id !== item.id);
      setDiscount(newListVoucher);
      notifySuccess("Xóa thành công");
      return;
    }
    notifyError("Xóa thất bại");
  };

  const handleChangePage = (number: number, id: string) => {
    number === 0
      ? history.push("/createvoucher")
      : history.push(`/vouchermanagement/updatevoucher/${id}`);
  };

  return (
    <div className="voucherManagement container">
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => handleChangePage(0, "")}
        >
          ADD
        </button>
        <div className="row">
          {discount?.map((item: any, index: number) => (
            <div className="col-3" key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.timviec.com.vn/2020/08/voucher-la-gi-4.jpg"
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bolder" }}>
                    Giảm {item.percentDiscount}%
                  </Card.Title>
                  <Card.Text style={{ fontWeight: "bold" }}>
                    Đơn tối thiểu {moneyFormater(item.minimumDiscount)} giảm tối
                    đa {moneyFormater(item.maxDiscount)}
                  </Card.Text>
                  <p>Số lượng: {item.quantity}</p>
                  <p style={{ color: "GrayText" }}>
                    Hết hạn {dayjs(item.duration).format("DD/MM/YYYY")}
                  </p>
                  <div className="buttonVoucher">
                    {" "}
                    <Button
                      variant="primary"
                      onClick={() => handleChangePage(1, item._id)}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => handleDeleteVoucher(item._id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoucherManagement;
