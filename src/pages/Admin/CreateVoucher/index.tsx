import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaChessKnight } from "react-icons/fa";
import { createVoucherApi } from "../../../apis/discount/createVoucher.api";
import { ButtonSpinner } from "../../../components/ButtonSpinner";
import { notifyError, notifySuccess } from "../../../utils/notify";

import "./style.scss";

interface CreateVoucherProps {}

const CreateVoucher = (props: CreateVoucherProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const submit = async (data: any, e: any) => {
    e.preventDefault();
    console.log("data", data);
    const startTime = dayjs(data.startTime).toISOString();
    const duration = dayjs(data.duration).toISOString();
    const newData = { ...data, startTime, duration };
    const result = await createVoucherApi(newData);
    if (result.statusCode === 200) {
      notifySuccess("Tạo thành công");
      reset();
      return;
    }
    notifyError("Tạo thất bại");
  };

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
                id="percentDiscount"
                {...register("percentDiscount")}
                className="form-control"
                placeholder="Phần trăm giảm (%)"
              />
              <p></p>
              <input
                type="text"
                id="maxDiscount"
                {...register("maxDiscount")}
                className="form-control"
                placeholder="Giảm tối đa"
              />
              <p></p>
              <input
                type="text"
                id="minimumDiscount"
                {...register("minimumDiscount")}
                className="form-control"
                placeholder="Đơn tối thiểu"
              />
              <p></p>
              <input
                type="text"
                id="quantity"
                {...register("quantity")}
                className="form-control"
                placeholder="Số lượng"
              />
              <p></p>
            </div>

            <div className="createProduct-rightCreateVoucher">
              <div>
                <span>Từ</span> &nbsp;
                <input
                  type="date"
                  id="startTime"
                  {...register("startTime")}
                />{" "}
              </div>
              <p></p>
              <div>
                <span>Đến</span>
                <input type="date" id="duration" {...register("duration")} />
              </div>
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
