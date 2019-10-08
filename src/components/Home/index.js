import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = ({ trips }) => ({ trips });

export default connect(mapStateToProps)(Home);
