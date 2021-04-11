import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default GoBack;
