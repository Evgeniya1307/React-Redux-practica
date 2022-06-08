// тут делаю запросы к внешнему api

import { addManyCustomersAction } from "../customerReducer"


export const fetchCustomers = ()=> {
    return function(dispatch){// должна вернуть новую фу-ию которая параметром принимает диспатч 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyCustomersAction(json))) // когда получены данные от сервера вызываю тот dispatch который прокинут через параметры и в него прокинула экшенкрейтор который вернёт экшен в моём случае добавить много пользователей и внего (json)это массив пользователей который пришёл от сервера  

    }
}