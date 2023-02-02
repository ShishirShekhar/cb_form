import './App.css';
import Design from './components/Design';
import Form from './components/Form';

function App() {
  return (
      <div className="h-screen flex">
        <div className="h-full w-full">
          <Design />
        </div>
        <div className="h-full w-full flex items-center">
          <Form />
        </div>
      </div>
  );
}

export default App;
