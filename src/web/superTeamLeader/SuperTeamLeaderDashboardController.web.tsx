// Customizable Area Start
import React from "react";
import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";

export const configJSON = require("../../config.js");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  classes: any;
  // Customizable Area End
}
interface S {
  // Customizable Area Start
  dashboardData: any;
  token: string;
  errorMsg: string;
  loading: boolean;
  userName: string;
  activeTab: string;
  showHospitalList: boolean;
  // Customizable Area End
}
interface SS {
  id: any;
}

enum ActiveTab {
  DASH_BOARD = "dashboard",
  FRANCHISE = "franchise",
}

export default class SuperTeamLeaderDashboardController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  apiDashboardItemCallId: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    console.disableYellowBox = true;
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = {
      dashboardData: [],
      errorMsg: "",
      token: "",
      loading: false,
      userName: "",
      activeTab: ActiveTab.DASH_BOARD,
      showHospitalList: false,
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    super.componentDidMount();
    window.scroll(0, 0);
    // Customizable Area Start
    const name = localStorage.getItem("userName");
    if (name) {
      this.setState({
        userName: name,
      });
    }
    // Customizable Area End
  }

  getToken = () => {
    const msg: Message = new Message(
      getName(MessageEnum.SessionRequestMessage)
    );
    this.send(msg);
  };

  collectedSampleClick = () => {
    this.props.navigation.navigate("FranchiseHospitalSelect");
  };

  shipItemsClick = () => {
    this.props.navigation.navigate("FranchiseShipCollectedItems");
  };

  getDashboardData(): boolean {
    // Customizable Area Start
    const header = {
      "Content-Type": configJSON.dashboarContentType,
      token: this.state.token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiDashboardItemCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.dashboardGetUrl
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.dashboarApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    // Customizable Area End
    return true;
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    // Customizable Area End
  }

  setShowHospitalValue = () => {
    this.setState({
      showHospitalList: !this.state.showHospitalList,
    });
  };
}

// Customizable Area End
