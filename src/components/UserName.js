import React from "react";
import { Link } from "react-router-dom";

function UserName({ name }) {
  return <Link to={"users/yapoov"}>{name}</Link>;
}
export default UserName;
