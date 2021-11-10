import React, { useState } from "react";
import "./style.scss";
import avatar from "../../images/avatar.jpg";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Badge } from "react-bootstrap";
import ModalChangeInfo from "./components/ModalChangInfo";
import ModalChangePass from "./components/ModalChangePass";

interface ProfilePageProps {}

export const ProfilePage = (props: ProfilePageProps) => {
  const [open, setOpen] = useState(false);
  const handdleOpen = () => {
    setOpen(true);
  };
  const handdleCancel = () => {
    setOpen(false);
  };
  const [open2, setOpen2] = useState(false);
  const handdleOpen2 = () => {
    setOpen2(true);
  };
  const handdleCancel2 = () => {
    setOpen2(false);
  };
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const submit = async (data: any, e: any) => {
    e.preventDefault();
  };
  return (
    <div className="profilePage container">
      <div className="profilePage-wrapper">
        <div className="profilePage-wrapper-headerBackground"></div>
        <div className="profilePage-wrapper-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="profilePage-wrapper-bottomBackground">
          <div className="signInPage-form-content">
            <h3>
              Name <span style={{ color: "#82ae46" }}>BUI TRUNG HIEU</span>
            </h3>

            <h3>
              Phone <span style={{ color: "#82ae46" }}>0925100721</span>
            </h3>

            <button
              onClick={handdleOpen}
              id="changeinfo"
              className="btn btn-block login-btn mb-4"
              type="submit"
              style={{
                backgroundColor: "#82ae46",
                color: "white",
              }}
            >
              Change Info
            </button>
            <button
              onClick={handdleOpen2}
              id="changpassword"
              className="btn btn-block login-btn mb-4"
              type="submit"
              style={{
                backgroundColor: "#82ae46",
                color: "white",
              }}
            >
              Change Password
            </button>
          </div>
          <ModalChangeInfo open={open} cancel={handdleCancel} />
          <ModalChangePass open2={open2} cancel2={handdleCancel2} />
        </div>
      </div>
    </div>
  );
};
