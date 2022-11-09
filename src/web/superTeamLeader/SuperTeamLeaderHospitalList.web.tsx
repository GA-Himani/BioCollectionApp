// Customizable Area Start
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { RightWhiteArrowComponent } from "../../assets";
import { SuperTeamLeaderHospitalListStyles } from "./SuperTeamLeaderHospitalListStyle.web";
import BackButtonTitleWebWeb from "../../../../../components/src/BackButtonTitleWeb.web";

interface ITeamLeaderHospitalListProps {
  classes: any;
  backButtonClick: () => void;
}

const SuperTeamLeaderHospitalList: React.FC<ITeamLeaderHospitalListProps> = ({
  classes,
  backButtonClick,
}) => {
  return (
    <>
      <BackButtonTitleWebWeb
        title="Listed hospital in Pune"
        buttonClick={() => backButtonClick()}
      />
      <Box className={classes.HospitalDetails}>
        <Accordion>
          <AccordionSummary
            expandIcon={<RightWhiteArrowComponent />}
            aria-controls="panel1a-content"
          >
            <Typography className="accordion-heading">
              <span className="digit">01</span> Dr. LH Hiranandani Hospital
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <Typography>
                  A-791, A-791, Bandra Reclamation Rd, General Arunkumar Vaidya
                  Nagar, Bandra West, Mumbai, Maharashtra 400050
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default withStyles(SuperTeamLeaderHospitalListStyles)(SuperTeamLeaderHospitalList);
// Customizable Area End
