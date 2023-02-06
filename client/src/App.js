import './App.css';
import Design from './components/Design';
import Form from './components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="sm:h-screen flex flex-col lg:flex-row bg-tech sm:bg-tech2 bg-no-repeat bg-cover bg-black bg-blend-overlay bg-opacity-10">
      <ToastContainer />
      <div className="h-64 sm:h-full w-full">
        <Design />
      </div>
      <div className="h-full w-full flex items-center">
        <Form />
      </div>
    </div>
  );
}

export default App;
