
import TopBar from "./TopBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from '../../redux/Users/actions'

const mapDispatchToProps = (dispatch) => ({
    logout: bindActionCreators(logout, dispatch)
});

const mapStateToProps = (state) => ({
    loggedIn: state.authentication.loggedIn,
    user: state.authentication.user
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
