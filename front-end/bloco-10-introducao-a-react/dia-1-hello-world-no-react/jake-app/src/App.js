import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Javascript', 'HTML', 'CSS', 'Bootstrap'];

function App() {
  return (
    <div className="App">
      <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
    </div>
  );
}

export default App;
