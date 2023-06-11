import React from "react";

const UserTable = ({ users }) => {
  return (
    <div>
      <table width="100%" style={{ margin: "15px" }} frame="box" rules="all">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {users.map((ele) => {
            return (
              <tr>
                <td>
                  <img
                    src={ele.picture.medium}
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td>
                  {ele.name.first}
                  {ele.name.last}
                </td>
                <td>{ele.gender}</td>
                <td>{ele.email}</td>
                <td>{ele.location.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
