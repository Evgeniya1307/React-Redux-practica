import {createStore ,combineReducers} from 'redux'
import {cashReducer} from './cashReducer';
import  {customerReducer}  from './customerReducer';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';


const rootReducer= combineReducers({ // корневой редюсер который принимает объект
cash: cashReducer,
custoners: customerReducer
})

export const store = createStore(rootReducer,composeWithDevTools) // composeWithDevTools инструменты разработчика  отслеживат состояние



 
   export default store 
      
    
    
    
    
    //редусер  передаётся в store и стор с помощью провайдера передаётся уже в реакт компоненты 
      











 