import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router";
import { updateVoucherApi } from "../../../../apis/discount/updateVoucher.api";
import { ButtonSpinner } from "../../../../components/ButtonSpinner";
import { notifyError, notifySuccess } from "../../../../utils/notify";

import "./style.scss";

interface UpdateVoucherProps {}

const UpdateVoucher = (props: UpdateVoucherProps) => {
  const { id } = useParams<any>();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const submit = async (data: any, e: any) => {
    e.preventDefault();
    const startTime = dayjs(data.startTime).toISOString();
    const duration = dayjs(data.duration).toISOString();
    const newData = { ...data, startTime, duration, id };
    const result = await updateVoucherApi(newData);
    if (result.statusCode === 200) {
      notifySuccess("Cập nhật thành công");
      reset();
      history.push("/vouchermanagement");
      return;
    }
    notifyError("Cập nhật thất bại");
  };

  const { t, i18n } = useTranslation();
  return (
    <div className="createProduct container w-50">
      <form onSubmit={handleSubmit(submit)}>
        <p className="navbar-brand" style={{ color: "whitesmoke" }}>
          UPDATE VOUCHER
        </p>
        <div>
          <div className="d-flex">
            <div className="createProduct-left">
              <input
                type="text"
                id="quantity"
                {...register("quantity")}
                className="form-control"
                placeholder="Số lượng"
              />
              <p></p>
            </div>

            <div className="createProduct-rightUpdateVoucher">
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

export default UpdateVoucher;
