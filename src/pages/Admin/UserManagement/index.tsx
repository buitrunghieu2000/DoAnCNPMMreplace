import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllUserApi } from "../../../apis/user/getAllUser.api";
import { getDetailUser } from "../../../features/user/slice";
import ModalInfo from "./components/ModalInfo";

interface userManagementProps {}

const UserManagement = (props: userManagementProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = (data: any) => {
    dispatch(getDetailUser(data));
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const result = await getAllUserApi();
      console.log(result);
      const { data } = result;
      setUser(data);
    })();
  }, []);

  return (
    <div className="userManagement container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item: any, i: number) => (
            <tr key={i}>
              <td>{i}</td>
              <td onClick={() => handleOpen(item)}>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalInfo open={open} cancel={handleCancel} />
    </div>
  );
};

export default UserManagement;
