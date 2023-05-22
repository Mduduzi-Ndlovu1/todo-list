import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className='absolute inset-10 p-20 border-2 border-solid' >
      <div className='p-2 '>
        <h1 className='flex justify-center' >The ToDo list</h1>
      </div>
      <Todo/>
    </div>
  );
}

export default App;
