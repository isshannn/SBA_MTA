import "./CSS_Files/ButtonsHomepage.css";

import { Link, Outlet } from "react-router-dom";

function ButtonHomepage() {
  return (
    <>
      <div className="ButtonsHomepage">
        <Link to="/Owner">
          <button className="Owners">For Owners</button>
        </Link>
        <Link to="/Tenant">
          <button className="Tenants">For Tenants</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default ButtonHomepage;
