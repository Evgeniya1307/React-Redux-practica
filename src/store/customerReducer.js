const defaultState={
    customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const ADD_MANY_CUSTOMERS ='ADD_MANY_CUSTOMERS' //буду добавлять сразу несколько пользователей
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS' 



// ещё одни reducer отличие будет состояние с массивом 
export const customerReduccer=(state = defaultState,action)=> {
    switch(action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers:[...state.customers,...state.payload]} //возвращаю новый объект состояния  внего разворачиваю старое состояние в котором изменяю массив customers ему присваиваю новый массив в кором разворачиваю тот массив который есть а затем  развернула тот массив который прилетит от сервера
  case 'ADD_CUSTOMER' :
     return {...state, customers:[...state.customers, action.payload]}//возвращаю новый объект который разварачиваю старое состояние и так как это добавление пользователя я присваю customers  новый массив который разворачиваю уже существующий массив и к нему в конец добавляю объект который буду передавать через action        
  
  case  'REMOVE_CUSTOMERS' :
     return{...state, customers:state.customers.filter(customer=>customer. id !==action.payload)} // локига по удалению клиента
     default:
         return state
  }   }
// функция которая экшейнкрейтор функция принимает какие то данные и  будет возвращать объект экшена
  export const addCustomerAction = (payload)=> ({type:ADD_CUSTOMER, payload})
  export const addManyCustomersAction = (payload)=> ({type:ADD_MANY_CUSTOMERS, payload})
  export const removeCustomerAction =(payload)=> ({type:REMOVE_CUSTOMERS, payload})
