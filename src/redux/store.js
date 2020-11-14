import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { authentication } from './Authentication/reducer';
import { registration } from './Registration/reducer';
import { users } from './Users/reducer';
import { alert } from './Alert/reducer';
import { inscriptos } from './Inscriptos/reducer';
import { inscripcion } from './Inscripcion/reducer';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  authentication,
  registration,
  inscriptos,
  inscripcion,
  users,
  alert
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
