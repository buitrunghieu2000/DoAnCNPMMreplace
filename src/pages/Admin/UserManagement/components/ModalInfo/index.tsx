import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ModalLMS } from "../../../../../components/Modal";
import { selectUserDetail } from "../../../../../features/user/slice/selector";
import "./style.scss";

interface Props {
  cancel: Function;
  open: boolean;
}

const ModalInfo = (props: Props) => {
  const user = useSelector(selectUserDetail);
  console.log(user);
  return (
    <div>
      {props.open ? (
        <ModalLMS title="INFOMATION" withHeader={true} cancel={props.cancel}>
          <div className="container mt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7">
                <div className="card p-3 py-4">
                  <div className="text-center">
                    {" "}
                    <img
                      src={user?.avatar}
                      width="100"
                      className="rounded-circle"
                    />{" "}
                  </div>
                  <div className="text-center mt-3">
                    {" "}
                    <h5 className="mt-2 mb-0">{user?.name}</h5>{" "}
                    <span>{user?.phone}</span>
                  </div>
                </div>
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

export default ModalInfo;
