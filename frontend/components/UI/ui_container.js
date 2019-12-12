import { connect } from "react-redux";
import { UI_Component } from "./ui_component";

const msp = ({ui}) => (
  ui
);

export default connect(msp)(UI_Component);