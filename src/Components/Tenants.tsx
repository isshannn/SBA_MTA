import Tooltip from "@mui/material/Tooltip";
import "./CSS_Files/Tenants.css";
import { Link } from "react-router-dom";
import ArrowUpward from "@mui/icons-material/ArrowUpward";

function Tenants() {
  return (
    <>
      <div className="containerTenant">
        <h1 className="HeadingTenants">Why MTA is good for Tenanats</h1>
        <p className="Des">
          The MTA includes several provisions that prioritize tenant protection
          and make renting more affordable and fair:
        </p>
        <ul>
          <li>
            <h2>Lower Security Deposits</h2>
          </li>
          <p>
            One of the biggest wins for tenants is the cap on security deposits:
            only two months’ rent for residential properties. In places like
            Karnataka, landlords often demand six months’ or even a year’s rent,
            which can be a huge financial strain.
          </p>

          <li>
            <h2>Protection from Arbitary Evictions</h2>
          </li>
          <p>
            Tenants can’t be thrown out without valid reasons, like not paying
            rent or damaging the property. Even in such cases, landlords must go
            through the Rent Authority, ensuring tenants get fair treatment.
          </p>

          <li>
            <h2>Transperant Agreements</h2>
          </li>
          <p>
            All agreements must be written, clearly outlining rent,
            responsibilities, and terms for ending the lease. This transparency
            means tenants don’t have to worry about sudden changes or unfair
            conditions.
          </p>

          <li>
            <h2>Controlled Rent Increases</h2>
          </li>
          <p>
            Landlords can’t just hike the rent whenever they want. Any increase
            has to be agreed upon and included in the agreement, giving tenants
            stability.
          </p>

          <li>
            <h2>Clear Maintance Rules</h2>
          </li>
          <p>
            Tenants only need to handle small repairs, like fixing a broken tap.
            Big structural issues, like roof leaks, are the landlord’s
            responsibility. This clarity helps avoid conflicts
          </p>

          <li>
            <h2>Quick Dispute Resolution</h2>
          </li>
          <p>
            Rent Authorities and Tribunals ensure that disputes are resolved
            quickly. Unlike the current system, where tenants might have to wait
            years for a court decision, the MTA ensures faster justice.
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

export default Tenants;
