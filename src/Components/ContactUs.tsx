import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import XIcon from "@mui/icons-material/X";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";

import "./CSS_Files/ContactUs.css";
import { Tooltip } from "@mui/material";

function ContactUs() {
  return (
    <div className="ContactUs-flex">
      <div className="containerIcons">
        <p className="Line">
          <strong>Reach out to us: </strong>
        </p>

        <div className="PhoneMadi">
          <CallIcon
            className="Call"
            fontSize="large"
            sx={{
              color: "white",
              padding: "0.18em",
              marginRight: "0.3em",
              border: "5px solid",
              borderRadius: "50%",
            }}
          />
          <line className="DushyaNumber">+91 63637 99599</line>
        </div>

        <div className="Icons">
          <Tooltip title="HQ Location" arrow>
            <PlaceIcon
              fontSize="large"
              onClick={() =>
                (window.location.href =
                  "https://maps.app.goo.gl/96DGW8FxVP26wAjeA")
              }
              sx={{
                "&:hover": { cursor: "pointer" },
                color: "#ff6600",
                padding: "0.18em",
                marginRight: "0.3em",
                border: "5px solid",
                borderRadius: "35%",
              }}
            />
          </Tooltip>

          <Tooltip title="Instagram" arrow>
            <InstagramIcon
              fontSize="large"
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/st_brosephs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==")
              }
              sx={{
                "&:hover": { cursor: "pointer" },
                color: "white",
                padding: "0.18em",
                marginRight: "0.3em",
                border: "5px solid",
                borderRadius: "35%",
              }}
            />
          </Tooltip>

          <Tooltip title="Reddit" arrow>
            <RedditIcon
              fontSize="large"
              onClick={() =>
                (window.location.href =
                  "https://www.reddit.com/user/St_Broseph/")
              }
              sx={{
                "&:hover": { cursor: "pointer" },
                color: "#ff6600",
                padding: "0.18em",
                marginRight: "0.3em",
                border: "5px solid",
                borderRadius: "35%",
              }}
            />
          </Tooltip>

          <Tooltip title="X / Twitter" arrow>
            <XIcon
              fontSize="large"
              onClick={() =>
                (window.location.href = "https://x.com/St_Brosephs")
              }
              sx={{
                "&:hover": { cursor: "pointer" },
                color: "white",
                padding: "0.18em",
                marginRight: "0.3em",
                border: "5px solid",
                borderRadius: "35%",
              }}
            />
          </Tooltip>

          <Tooltip title="LinkedIn" arrow>
            <LinkedInIcon
              fontSize="large"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/company/st-broseph/")
              }
              sx={{
                "&:hover": { cursor: "pointer" },
                color: "#ff6600",
                padding: "0.18em",
                marginRight: "0.3em",
                border: "5px solid",
                borderRadius: "35%",
              }}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
