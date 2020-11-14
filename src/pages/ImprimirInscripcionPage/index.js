import ImprimirInscripcionPage from "./ImprimirInscripcionPage";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { getInfoByDNI, getInfo } from '../../redux/Users/actions'
// import { postFormNuevoInscripto } from '../../redux/Inscriptos/actions'

const mapDispatchToProps = (dispatch) => ({
    
});

const mapStateToProps = (state) => ({
    dataToPrint: state.inscriptos.dataToPrint 
});

export default connect(mapStateToProps, mapDispatchToProps)(ImprimirInscripcionPage);