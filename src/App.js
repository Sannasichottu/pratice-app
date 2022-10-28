import './App.css';
import Callback from './pratice/callback';
//import Demo from './pratice/function';
//import DemoClass from './pratice/class.jsx';
/*import Destruct from './pratice/destruct';
import State from './pratice/state';
import Effect from './pratice/effect.jsx';
import UseRef from './pratice/useRef.jsx'; */
import Context from './pratice/context';
import Reducer from './pratice/reducer';

function App() {
  return (
    <div className="App">
      { /*<Demo />
      <DemoClass />
  <Destruct />
      <State />
      <Effect />
      <UseRef /> */}
      <Context />
      <Reducer/>
      <Callback />
    </div>
  );
}

export default App;
