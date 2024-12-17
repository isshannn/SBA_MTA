import { Accordion } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Accordion_Dif() {
  return (
    <div>
      <Accordion defaultExpanded square={false} sx={{}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Who it Covers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>MTA: </strong>The MTA applies to all new rental agreements
            for residential and commercial properties but excludes industrial or
            religious spaces. <br />
            <strong>KRCA: </strong>The Karnataka Rent Act mainly applies to
            properties within certain rent limits, leaving out high-value
            properties.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Security Deposits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>MTA: </strong>Under the MTA, landlords can only ask for a
            maximum of two months’ rent as a deposit for residential properties.{" "}
            <br />
            <strong>KRCA: </strong>Karnataka’s law has no such limit, allowing
            landlords to demand excessive deposits that burden tenants.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Rent Agreements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>MTA: </strong>The MTA requires all rental agreements to be
            written and registered with a Rent Authority, ensuring clear terms.{" "}
            <br />
            <strong>KRCA: </strong>In Karnataka, agreements don’t have to be
            registered, and oral agreements are still valid, leading to
            misunderstandings.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>Eviction Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>MTA: </strong>With the MTA, landlords can only evict tenants
            for specific reasons (like not paying rent or misusing the
            property), and the process is straightforward.
            <br />
            <strong>KRCA: </strong>In Karnataka, evicting a tenant often means
            going through lengthy and expensive court cases.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>Dispute Resolution</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>MTA: </strong>The MTA introduces Rent Authorities and
            Tribunals to resolve disputes quickly and efficiently.
            <br />
            <strong>KRCA: </strong>Karnataka relies on civil courts, which are
            overburdened and slow.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default Accordion_Dif;
