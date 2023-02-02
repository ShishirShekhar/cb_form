import './App.css';
import Design from './components/Design';
import Form from './components/Form';

function App() {
  return (
      <div className="relative">
        <div className="absolute">
          <Form />
        </div>
        <div className="absolute">
          {/* <Design /> */}
        </div>
      </div>
  );
}

export default App;
