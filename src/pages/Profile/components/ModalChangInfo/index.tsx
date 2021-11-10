import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ModalLMS } from "../../../../components/Modal";

interface Props {
  cancel: Function;
  open: boolean;
}

const ModalChangeInfo = (props: Props) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const submit = async (data: any, e: any) => {
    e.preventDefault();
  };
  return (
    <div>
      {props.open ? (
        <ModalLMS title="Change InFo" withHeader={true} cancel={props.cancel}>
          <div className="changeInfo">
            <form onSubmit={handleSubmit(submit)} className="changInfomation">
              <p>INFOMATION</p>
              <input
                type=""
                {...register("phone")}
                id="phone"
                className="form-control"
                placeholder="Phone"
              />
              <p></p>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="form-control"
                placeholder="Name"
              />
              <p></p>

              <button
                id="changeinfo"
                className="btn btn-block login-btn mb-4"
                type="submit"
                style={{ backgroundColor: "#82ae46" }}
              >
                Submit
              </button>
            </form>
          </div>
        </ModalLMS>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ModalChangeInfo;
