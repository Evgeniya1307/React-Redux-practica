import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReduccer } from "./customerReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";



const rootReducer = combineReducers({
  // корневой редюсер который принимает объект
  cash: cashReducer,
  customers: customerReduccer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // composeWithDevTools инструменты разработчика  отслеживат состояние

export default store;

//редусер  передаётся в store и стор с помощью провайдера передаётся уже в реакт компоненты
//{JSON} Placeholder фейковый api для проверки асинхронности