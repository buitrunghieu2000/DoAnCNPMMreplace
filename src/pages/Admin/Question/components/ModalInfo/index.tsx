import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ButtonSpinner } from "../../../../../components/ButtonSpinner";
import { ModalLMS } from "../../../../../components/Modal";
import { selectUserDetail } from "../../../../../features/user/slice/selector";

import "./style.scss";

interface Props {
  cancel: Function;
  open: boolean;
}

const ModalQuestion = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const submit = async (data: any, e: any) => {
    e.preventDefault();
    reset();
  };

  return (
    <div>
      {props.open ? (
        <ModalLMS title="Question" withHeader={true} cancel={props.cancel}>
          <div className="container mt-5 mb-3">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7">
                <form onSubmit={handleSubmit(submit)}>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="form-control"
                    placeholder="Nhập tên đi ô cháu êi"
                  />
                  <div style={{ margin: "10px auto", width: "30%" }}>
                    <button
                      id="login"
                      className="btn btn-block login-btn "
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: "#f5a623",
                        width: "100%",
                        margin: "0 auto",
                      }}
                    >
                      {!isSubmitting ? "Tạo" : <ButtonSpinner />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ModalLMS>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ModalQuestion;
