// Customizable Area Start
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import SuperTeamLeaderDashboardController, {
  Props,
} from "./SuperTeamLeaderDashboardController.web";
import { DashboardWebStyles } from "./SuperTeamLeaderDashboardStyle.web";
import {
  Calendar,
  magnify,
  closeUpScientistLaboratory,
  threeSimilarcardboardBoxesWithCovers,
  closeUpHandHoldingScanner,
} from "../../../assets";
import { CustomInput } from "../../../../../components/src/CustomInput.web";
import BackButtonTitleWebWeb from "../../../../../components/src/BackButtonTitleWeb.web";
import SuperTeamLeaderHospitalList from "./SuperTeamLeaderHospitalList.web";

enum ActiveTab {
  DASH_BOARD = "dashboard",
  FRANCHISE = "franchise",
}

class SuperTeamLeaderDashboard extends SuperTeamLeaderDashboardController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    // Customizable Area Start
    const { classes } = this.props;
    return (
      //Merge Engine DefaultContainer
      <Container maxWidth="lg" style={{ margin: "20px auto" }}>
        {this.state.showHospitalList ? (
          <SuperTeamLeaderHospitalList
            backButtonClick={() => this.setShowHospitalValue()}
          />
        ) : (
          <Box className={classes.SuperTeamLeader}>
            {this.state.activeTab === ActiveTab.FRANCHISE && (
              <BackButtonTitleWebWeb
                buttonClick={() =>
                  this.setState({
                    activeTab: ActiveTab.DASH_BOARD,
                  })
                }
              />
            )}
            <Box className="main-heading">
              {this.state.activeTab === ActiveTab.DASH_BOARD ? (
                <Typography variant="h2">
                  Hello, {this.state.userName}{" "}
                </Typography>
              ) : (
                <CustomInput
                  value={""}
                  onChange={(e) => {}}
                  placeholder="Search Franchise"
                  endAdornment={
                    <InputAdornment position="end">
                      <img
                        src={magnify}
                        alt="search"
                        className="search-image"
                      />
                    </InputAdornment>
                  }
                />
              )}
              <Box className="right-side">
                <Button className="calenderButton" variant="contained">
                  <img src={Calendar} />
                </Button>
              </Box>
            </Box>
                <Grid item md={10} sm={9} xs={8} className="right-side-grid">
                  {this.state.activeTab === ActiveTab.DASH_BOARD && (
                    <>
                      <Box className="items-container">
                        <Box className="items-inside-container">
                          <Box className="outer-item-container">
                            <Box className="item-container">
                              <img src={threeSimilarcardboardBoxesWithCovers} alt="threeSimilarcardboardBoxesWithCovers" />
                              <Box className="text-container">
                                <Typography className="digit-heading">
                                  100
                                </Typography>
                                <Typography className="item-name">
                                  TOTAL COLLECTED ITEMS
                                </Typography>
                              </Box>
                            </Box>
                            <Box className="item-container">
                              <img src={threeSimilarcardboardBoxesWithCovers} alt="threeSimilarcardboardBoxesWithCovers" />
                              <Box className="text-container">
                                <Typography className="digit-heading">
                                  100
                                </Typography>
                                <Typography className="item-name">
                                  TOTAL RECEIVED ITEMS
                                </Typography>
                              </Box>
                            </Box>
                            <Box className="item-container">
                              <img src={closeUpHandHoldingScanner} alt="closeUpHandHoldingScanner" />
                              <Box className="text-container">
                                <Typography className="item-name">
                                  Please scan received items
                                </Typography>
                                <Typography className="item-name">
                                  Click here to scan
                                </Typography>
                                <Typography className="item-name">
                                  <Button className="scanningButton" variant="contained">
                                    <p>Start Scanning</p>
                                  </Button>
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Box className="outer-item-container">
                            <Box className="item-container">
                              <img src={closeUpScientistLaboratory} alt="closeUpScientistLaboratory" />
                              <Box className="text-container">
                                <Typography className="item-name">
                                  Total Positive item collected
                                </Typography>
                                <Typography className="digit-heading">
                                  20/40
                                </Typography>
                                <Typography className="item-name">
                                  50%
                                </Typography>
                                <hr />
                                <Typography className="item-name">
                                  Please scan items
                                </Typography>
                                <Typography className="item-name">
                                  Click here to scanning
                                </Typography>
                                <Typography className="item-name">
                                  <Button className="scanningButton" variant="contained">
                                    <p>Positive Sample</p>
                                  </Button>
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Box className="outer-item-container">
                            <Box className="item-container">
                              <img src={closeUpScientistLaboratory} alt="closeUpScientistLaboratory" />
                              <Box className="text-container">
                                <Typography className="item-name">
                                  Total Negative item collected
                                </Typography>
                                <Typography className="digit-heading">
                                  20/40
                                </Typography>
                                <Typography className="item-name">
                                  50%
                                </Typography>
                                <hr />
                                <Typography className="item-name">
                                  Please scan items
                                </Typography>
                                <Typography className="digit-heading">
                                  Click here to scanning
                                </Typography>
                                <Typography className="item-name">
                                  <Button className="scanningButton" variant="contained">
                                    <p>Negative Sample</p>
                                  </Button>
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  )}
                </Grid>
            </Box>
        )}
      </Container>
      //Merge Engsine End DefaultContainer
    );
    // Customizable Area End
  }
}

export default withStyles(DashboardWebStyles)(SuperTeamLeaderDashboard);
// Customizable Area End
