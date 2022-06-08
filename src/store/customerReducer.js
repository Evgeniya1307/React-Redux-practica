const defaultState={
    customers: []
}

// ещё одни reducer отличие будет состояние с массивом 
export const customerReduccer=(state = defaultState,action)=> {
    switch(action.type) {
  case 'ADD_CUSTOMER' :
     return {...state, customers:[...state.customers, action.payload]}//возвращаю новый объект который разварачиваю старое состояние и так как это добавление пользователя я присваю customers  новый массив который разворачиваю уже существующий массив и к нему в конец добавляю объект который буду передавать через action        
  
  case  'REMOVE_CUSTOMERS' :
     return{...state, customers:state.customers.filter(customer=>customer. id !==action.payload)} // локига по удалению клиента
     default:
         return state
  }   }
  