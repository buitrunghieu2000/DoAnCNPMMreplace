import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { createIEBillApi } from "../../../../apis/iebill/createIEBill.api";
import { ButtonSpinner } from "../../../../components/ButtonSpinner";
import { selectAllProduct } from "../../../../features/products/slice/selector";
import { getAllProductAsync } from "../../../../features/products/slice/thunk";
import { notifyError, notifySuccess } from "../../../../utils/notify";

import "./style.scss";

interface CreateIEBillProps {}

const CreateIEBill = (props: CreateIEBillProps) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [bill, setBill] = useState<any>([]);

  useEffect(() => {
    (async () => {
      dispatch(getAllProductAsync({ limit: 20, skip: 1 }));
    })();
  }, []);
  const product = useSelector(selectAllProduct);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();
  const submit = async (data: any, e: any) => {
    e.preventDefault();

    data.name = name;

    setBill([...bill, data]);
    reset();
  };

  const sendListBill = async () => {
    const result = await createIEBillApi(bill);
    if (result.statusCode === 200) {
      notifySuccess("Tạo thành công");
      reset();
      return;
    }
    notifyError("Thất bại");
  };

  const handleChange = (e: any) => {
    var index = e.target.selectedIndex;
    const name = e.target[index].text;
    setName(name);
  };

  const { t, i18n } = useTranslation();
  return (
    <div className="createProduct container w-50">
      <form onSubmit={handleSubmit(submit)}>
        <p className="navbar-brand" style={{ color: "whitesmoke" }}>
          ADD IEBill
        </p>
        <div className="d-flex">
          <div className="createProduct-left">
            <input
              type="text"
              id="quantity"
              {...register("quantity")}
              className="form-control"
              placeholder="Số lượng"
            />

            <button
              id="login"
              className="btn btn-block login-btn mb-4"
              type="submit"
              disabled={isSubmitting}
              style={{ backgroundColor: "#f5a623" }}
            >
              {!isSubmitting ? "Thêm vào danh sách bill" : <ButtonSpinner />}
            </button>
            <button
              onClick={sendListBill}
              id="login"
              className="btn btn-block login-btn mb-4"
              type="submit"
              disabled={isSubmitting}
              style={{ backgroundColor: "#f5a623" }}
            >
              {!isSubmitting ? "Tạo bill" : <ButtonSpinner />}
            </button>
          </div>

          <div className="createProduct-right">
            <input
              type="text"
              id="price"
              {...register("price")}
              className="form-control"
              placeholder="Giá"
            />
            <p></p>
            <input
              type="text"
              id="priceDiscount"
              {...register("priceDiscount")}
              className="form-control"
              placeholder="Giảm giá"
            />
            <p></p>
            <div className="d-flex justifycontent-space-between">
              <Form.Select {...register("id")} onChange={handleChange}>
                {product.data?.map((item: any, i: number) => (
                  <option value={item._id} key={i}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateIEBill;
