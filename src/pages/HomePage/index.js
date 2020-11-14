import HomePage from "./HomePage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ingresar } from '../../redux/Inscripcion/actions'
import { getInfoByDNI } from '../../redux/Users/actions'

const mapDispatchToProps = (dispatch) => ({
    ingresar: bindActionCreators(ingresar, dispatch),
    getInfoByDNI: bindActionCreators(getInfoByDNI, dispatch),
});

const mapStateToProps = (state) => ({
    loggingIn: state.authentication.loggingIn,
    error: state.alert
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
