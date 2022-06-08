
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {createStore} from 'redux'
import store from './store/index';



function App() {
  // изменить состояние нужен диспатч получить внутри компоненты
const dispatch = useDispatch()
  // теперь это состояние получить 
  const cash =useSelector(state=>state.cash.cash)// параметром принимает фу-ию она принимает состояние из него получу нужную переменную
const customers = useSelector(state=> state.customers.customers)// с помощью useSelector получаю массив клиентов банка

const addCash=(cash)=> {
dispatch({type:'ADD_CASH', payload:cash})//payload:5 сумма на которую хочу увеличить , payload: cash сумму чтобы менять смаой
}

const getCash=(cash)=> {
  dispatch({type:'GET_CASH', payload:cash})
}

return (
    <div className="App">
    <div style={{fontSize:'3rem'}} >{cash}</div>
     <div className={{display:'flex'}}>
     <button onClick={()=>addCash(Number(prompt()))}>Получить счёт</button> 
     <button onClick={()=> getCash()}>Снять со счёта</button>
     </div>
<div>

</div>

    </div>
  );
}

export default App;



//Number(prompt()встроенная функция браузера которая откпывает окно с полем ввода так она возвращает чтроку нужно преобразовать к числовому значению
