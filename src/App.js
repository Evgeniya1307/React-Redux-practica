
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  // изменить состояние нужен диспатч получить внутри компоненты
const dispatch = useDispatch()
  // теперь это состояние получить 
  const cash =useSelector(state=>state)// параметром принимает фу-ию она принимает состояние 

return (
    <div className="App">
     
    </div>
  );
}

export default App;
