import { userConstants } from './constants';
import { userService } from '../../_services';
import { alertActions } from '../Alert/actions';
import { history } from '../../_helpers';
import Swal from 'sweetalert2';

export const userActions = {
    logout,
    register,
    getAll,
    delete: _delete,
    getInfoByDNI,
    getInfo
};

export const getInfo = () => async dispatch => {
    dispatch(request());
    try {
        const data = await userService.getInfo();
        dispatch(success(data));
    } catch (error) {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()))
    }

    function request(payload) { return { type: userConstants.GET_ALL_REQUEST, payload } }
    function success(payload) { return { type: userConstants.GET_ALL_SUCCESS, payload } }
    function failure(error) { return { type: userConstants.GET_ALL_FAILURE, error } }
}

export const getInfoByDNI = (dni) => async dispatch => {
    dispatch(request(dni));
    try {
        const data = await userService.getInfoByDNI(dni);
        if(data){
            // dispatch(success(data));            
            console.log("entro")
            history.push('/nuevo-inscripto');
            dispatch(success(data));           
        }else{
            Swal.fire(
                'ADVERTENCIA!',
                "NO EXISTEN DATOS PARA ESE DNI. POR FAVOR CARGALOS.",
                'warning'
            )
            history.push('/nuevo-inscripto');
            dispatch(success2(dni))
            // dispatch(reset())
        }
    } catch (error) {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()))
    }

    function request(payload) { return { type: userConstants.GET_INFO_REQUEST, payload } }
    function success(payload) { return { type: userConstants.GET_INFO_SUCCESS, payload } }
    function success2(payload) { return { type: userConstants.GET_INFO_SUCCESS2, payload } }
    function failure(error) { return { type: userConstants.GET_INFO_FAILURE, error } }
    function reset() { return { type: userConstants.RESET_USER_INFO }}
}

export const login = (dni, password) => async dispatch => {
    dispatch(request(dni));
    try {
        const data = await userService.login(dni, password);
        dispatch(success(data));
        history.push('/homepage');
    } catch (error) {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()))
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export const logout = () => {
    userService.logout();
    history.push('/login');
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}