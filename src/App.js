import './App.css';
import Nav from './components/Nav';
import Message from './components/Message';


function App() {
  // let body = document.querySelector('body')
  // body.style.width = '100vh'
  return (
    <div className='flex justify-center items-center h-screen w-screen z-20'>
    <div className='bg-purple-300 text-white w-1/3 h-5/6 rounded-lg'>
      <Nav/>
      <div>
        <Message/>
      </div>
    </div>
  </div>
  );
}

export default App;
