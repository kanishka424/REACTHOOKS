import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter.js'
import HookCounter from './components/HookCounter.js'
import HookCounterTwo from './components/HookCounterTwo.js'
import HookCounterThree from './components/HookCounterThree.js'



function App() {
  return (
    <div className="App">
     {/* <ClassCounter></ClassCounter> */}
     <HookCounterThree></HookCounterThree>
    </div>
  );
}

export default App;
