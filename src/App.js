
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {createStore} from 'redux'
import store from './store/index';
import { addCustomerAction } from './store/customerReducer';
import { removeCustomerAction } from './store/customerReducer';
import {fetchCustomers} from './store/asyncActions/customers';

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

// функция при нажатии на кнопку будт добавлять пользователя addCustomer 
const addCustomer = (name)=> {
const customer={ // данные объект пользователя
name,
id: Date.now(), // чтобы id был уникальный получу его из текущего времени
}
 // dispatch({type:'ADD_CUSTOMER', payload:customer})// прокидываю в диспатч экшен у него есть тип и какие то данные
dispatch(addCustomerAction(customer))
}

//при нажатии конкретного пользователя и при нажатии будет удаляться
const removeCustomer = (customer)=> {
dispatch( removeCustomerAction(customer.id))
}


return (
    <div className="App">
    <div style={{fontSize:'3rem', marginTop: 10}}>Баланс:{cash}</div>
     <div style={{display:'flex'}}>
     <button onClick={()=>addCash(Number(prompt()))}>Получить счёт</button> 
     <button onClick={()=> getCash()}>Снять со счёта</button>
     <button onClick={()=>addCustomer(prompt())}>Добавить клиента</button> 
     <button onClick={()=> getCash()}>Удалять клиента</button>
    <button onClick={()=>dispatch(fetchCustomers()) }>Получить клиентов из базы</button>
     </div>
     
     {customers.length> 0 ? // на проверку если пустой массив то отобразить какую нибудь надпись если не пуст отрисовать массив клиентов
     <div>
     {customers.map(customer=> 
      <div onClick={()=>removeCustomer(customer)} style={{fontSize:'2ren', border: '1px solid black', padding: '10px', marginTop:5}}> 
      {customer.name} </div>
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
