import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ModalLMS } from "../../../../components/Modal";

interface Props {
  cancel2: Function;
  open2: boolean;
}

const ModalChangePass = (props: Props) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const submit = async (data: any, e: any) => {
    e.preventDefault();
  };
  return (
    <div>
      {props.open2 ? (
        <ModalLMS title="Change InFo" withHeader={true} cancel={props.cancel2}>
          <div className="changeInfo">
            <form onSubmit={handleSubmit(submit)} className="changInfomation">
              <p>Change Pass</p>
              <input
                type=""
                {...register("oldPassword")}
                id="phone"
                className="form-control"
                placeholder="Old Password"
              />
              <p></p>
              <input
                type="text"
                id="name"
                {...register("newPassword")}
                className="form-control"
                placeholder="New Password"
              />
              <p></p>

              <button
                id="changepassword"
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

export default ModalChangePass;
