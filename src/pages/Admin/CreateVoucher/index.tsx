import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { createProductApi } from "../../../apis/product/createProduct.api";
import { ButtonSpinner } from "../../../components/ButtonSpinner";
import { selectAllGroupProduct } from "../../../features/groupProduct/slice/selector";
import { getAllGroupProductAsync } from "../../../features/groupProduct/slice/thunk";
import { notifySuccess } from "../../../utils/notify";
import { createProductSchema } from "../../../validate/auth";

import "./style.scss";

interface CreateVoucherProps {}

const CreateVoucher = (props: CreateVoucherProps) => {
  // const [groupProduct, setGroupProduct] = useState([]);
  // const [nameFile, setNameFile] = useState("");
  // const [open, setOpen] = useState(false);
  // const grProduct = useSelector(selectAllGroupProduct);
  // const dispatch = useDispatch();
  // const handdleOpen = () => {
  //   setOpen(true);
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(createProductSchema) });

  const submit = async (data: any, e: any) => {
    e.preventDefault();

    const result = await createProductApi(data);
    if (result.statusCode === 200) {
      notifySuccess("Tạo sản phẩm thành công");
      reset();
    }
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const files = [...e.target.files];
  //     setNameFile(files.map((e: any) => e.name).join(","));
  //   }
  // };

  // React.useEffect(() => {
  //   dispatch(getAllGroupProductAsync());
  // }, []);

  const { t, i18n } = useTranslation();
  return (
    <div className="createProduct container w-50">
      <form onSubmit={handleSubmit(submit)}>
        <p className="navbar-brand" style={{ color: "whitesmoke" }}>
          ADD VOUCHER
        </p>
        <div>
          <div className="d-flex">
            <div className="createProduct-left">
              <input
                type="text"
                id="name"
                {...register("name")}
                className="form-control"
                placeholder="Phần trăm giảm (%)"
              />
              <p></p>
              <input
                type="text"
                id="price"
                {...register("price")}
                className="form-control"
                placeholder="Giảm tối đa"
              />
              <p></p>
              <input
                type="text"
                id="price"
                {...register("price")}
                className="form-control"
                placeholder="Đơn tối thiểu"
              />
              <p></p>
              <input
                type="text"
                id="price"
                {...register("price")}
                className="form-control"
                placeholder="Số lượng"
              />
              <p></p>
            </div>

            <div className="createProduct-right">
              <span>Từ</span> &nbsp;
              <input type="date" id="price" {...register("price")} /> <p></p>
              <span>Đến</span>
              <input type="date" id="price" {...register("price")} />
              <p></p>
            </div>
          </div>
          <button
            id="login"
            className="btn btn-block login-btn mb-4"
            type="submit"
            disabled={isSubmitting}
            style={{ backgroundColor: "#f5a623" }}
          >
            {!isSubmitting ? (
              t("admin.CreateProduct.Button")
            ) : (
              <ButtonSpinner />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateVoucher;
