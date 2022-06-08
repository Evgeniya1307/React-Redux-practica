
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

// функция при нажатии на кнопку будт добавлять пользователя
const addCustomer = (name)=> {
const customer={ // данные объект пользователя
name,
id: Dte.now(), // чтобы id был уникальный получу его из текущего времени
}
  dispatch({type:'ADD_CUSTOMER'})// прокидываю в диспатч экшен у него есть тип и какие то данные

}


return (
    <div className="App">
    <div style={{fontSize:'3rem'}} >{cash}</div>
     <div className={{display:'flex'}}>
     <button onClick={()=>addCash(Number(prompt()))}>Получить счёт</button> 
     <button onClick={()=> getCash()}>Снять со счёта</button>
     <button onClick={()=>addCash(Number(prompt()))}>Получить счёт</button> 
     <button onClick={()=> getCash()}>Удалять клиента</button>
     
     
     </div>
     
     {customers.length> 0 ? // на проверку если пустой массив то отобразить какую нибудь надпись если не пуст отрисовать массив клиентов
     <div>
     {customers.map(customer=> 
      <div> {customer.name} </div>
      )}
     </div>
    :
    <div  style={{fontSize: '2ren', marginTop: 20}}> 
    Клиенты отсутствуют!
    </div>
    
    }
     



    </div>
  );
}

export default App;



//Number(prompt()встроенная функция браузера которая откпывает окно с полем ввода так она возвращает чтроку нужно преобразовать к числовому значению
