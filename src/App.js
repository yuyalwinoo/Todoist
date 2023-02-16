
import './App.css';
import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';

function App() {
  return (
      <div className='flex flex-col justify-center items-center'>
        <AddTask />
        <ViewTask />
      </div>
  );
}

export default App;
