import "./CSS_Files/MTA.css";
import logo from "./SBA_Logo.png";
// import "bootstrap/dist/css/bootstrap.css"

function MTA() {
  return (
    <>
      <div className="Header">
        <img src={logo} className="logo" />
        <h1 className="HeadingMTA">MODEL TENANCY ACT</h1>
      </div>
      <p className="FirstPara">
        The Model Tenancy Act (MTA), introduced in 2021, is a draft legislation
        designed by the Union Ministry for Housing and Urban Affairs to improve
        the law concerning rental housing in India. It aims to resolve
        long-standing issues like disputes between landlords and tenants,
        unclear rental agreements, and inefficient legal processes. The Act
        encourages a balance where both tenants and landlords feel secure and
        incentivized. However, this draft is not an enactment which is directly
        enforceable. It requires ratification of each state for its adoption and
        implementation as the matters relating to the relationship of landlord
        and tenant is a state subject. In Karnataka, rental housing is currently
        governed by the Karnataka Rent Control Act, 1999 (KRCA) which has been
        criticized for being outdated and biased toward tenants. Comparing the
        two acts highlights how the MTA addresses key problems and proposes a
        more modern approach.
      </p>
    </>
  );
}
export default MTA;
