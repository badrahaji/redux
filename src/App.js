import AddTask from './components/AddTask';
import Filter from './components/Filter';
import Todolist from './components/Todolist';
function App() {
  return (
    <div className="App">
    <AddTask/>
    <Todolist/>
    <Filter/>
    </div>
  );
}

export default App;
