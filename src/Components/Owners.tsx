import { Link } from "react-router-dom";
import "./CSS_Files/Owners.css";
import { Tooltip } from "@mui/material";
import ArrowUpward from "@mui/icons-material/ArrowUpward";

function Owners() {
  return (
    <>
      <div className="containerOwner">
        <h1 className="HeadingOwners">Why MTA is good for Owners</h1>
        <p className="Des">
          Landlords have often faced issues like tenants overstaying, not paying
          rent, or damaging properties. The MTA gives them more confidence and
          legal backing to rent out their properties:
        </p>
        <ul>
          <li>
            <h2>Easier Evictions: </h2>
          </li>
          <p>
            {" "}
            If a tenant stops paying rent, misuses the property, or refuses to
            leave after the agreement ends, landlords can evict them without
            long court battles. The Rent Authority handles the process
            efficiently.
          </p>

          <li>
            <h2>Penalty for overstaying: </h2>
          </li>
          <p>
            {" "}
            If a tenant stays beyond the agreement period without renewing it,
            they’ll have to pay double the rent for two months and four times
            the rent after that. This ensures tenants don’t overstay their
            welcome.
          </p>

          <li>
            <h2>Security Deposits Problems: </h2>
          </li>
          <p>
            {" "}
            Landlords can use the security deposit to recover unpaid rent or pay
            for repairs caused by tenant negligence. This ensures they aren’t
            left out of pocket.
          </p>

          <li>
            <h2>Clear Legal Framework: </h2>
          </li>
          <p>
            {" "}
            By making written agreements mandatory, the MTA reduces disputes.
            Landlords know their rights are protected and that tenants must
            comply with the terms of the agreement.
          </p>

          <li>
            <h2>Faster Dispute Resolution: </h2>
          </li>
          <p>
            {" "}
            Landlords no longer have to wait years for courts to decide on rent
            or eviction disputes. The Rent Tribunals are designed to resolve
            issues quickly.
          </p>
        </ul>
      </div>

      <div className="Arrow">
        <Tooltip title="Collapse Content" arrow>
          <Link className="Arrow" to="/">
            <ArrowUpward
              sx={{
                border: "3px solid",
                borderRadius: "50%",
                fontSize: "2.5em",
                ":hover": { borderColor: "#000033" },
              }}
            />
          </Link>
        </Tooltip>
      </div>
    </>
  );
}

export default Owners;
