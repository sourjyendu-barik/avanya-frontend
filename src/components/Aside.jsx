import React from "react";
import { Link } from "react-router";
const Aside = () => {
  return (
    <aside>
      <Link to="/" className="btn btn-primary">
        Back to Dashboard
      </Link>
    </aside>
  );
};

export default Aside;
