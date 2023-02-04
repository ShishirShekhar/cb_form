import './App.css';
import Design from './components/Design';
import Form from './components/Form';
import logo from './assets/cblogogray.png';

function App() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="h-full w-full">
        <Design />
      </div>
      <div className="h-full w-full flex items-center">
        <Form />
      </div>
      <div className="w-full lg:hidden flex justify-center py-10">
        <img src={logo} alt="logo" className='w-96' />
      </div>
    </div>
  );
}

export default App;
