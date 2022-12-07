import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to={"/login"}>
        <p>Go to Login Page</p>
      </Link>
    </div>
  );
};

export default HomePage;
