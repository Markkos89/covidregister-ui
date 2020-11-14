import NuevoInscriptoPage from "./NuevoInscriptoPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getInfoByDNI, getInfo } from '../../redux/Users/actions'
import { postFormNuevoInscripto } from '../../redux/Inscriptos/actions'

const mapDispatchToProps = (dispatch) => ({
    getInfoByDNI: bindActionCreators(getInfoByDNI, dispatch),
    getInfo: bindActionCreators(getInfo, dispatch),
    postFormNuevoInscripto: bindActionCreators(postFormNuevoInscripto, dispatch),
});

const mapStateToProps = (state) => ({
    info_loading: state.users.info_loading,
    info_user: state.users.info_user,
    error: state.users.error,
    all_info: state.users.all_info,
    data_nuevo_inscripto: state.inscriptos.data
});

export default connect(mapStateToProps, mapDispatchToProps)(NuevoInscriptoPage);
