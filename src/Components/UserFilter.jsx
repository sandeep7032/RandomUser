import React from "react";

const UserFilter = ({ setUsers, state }) => {
  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        justifyContent: "space-evenly",
        margin: "20px auto",
      }}
    >
      <div>
        <input
          type="radio"
          name="gender"
          value="All"
          defaultChecked
          onChange={() => {
            setUsers(state);
          }}
        />
        All
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={() => {
            setUsers(state.filter((data) => data.gender === "male"));
          }}
        />
        Male
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={() => {
            setUsers(state.filter((data) => data.gender === "female"));
          }}
        />
        Female
      </div>
    </div>
  );
};

export default UserFilter;
