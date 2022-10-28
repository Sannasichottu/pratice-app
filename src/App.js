import './App.css';
//import Callback from './pratice/callback';
//import Demo from './pratice/function';
//import DemoClass from './pratice/class.jsx';
/*import Destruct from './pratice/destruct';
import State from './pratice/state';
import Effect from './pratice/effect.jsx';
import UseRef from './pratice/useRef.jsx';
import Context from './pratice/context';
import Reducer from './pratice/reducer'; */
import ComponentDidmount from './pratice/componentDidmount';
import ShouldComponentUpdate from './pratice/shouldUpdate';
import Componentwillmount from './pratice/componentwillmount';
import ComponentDidUpdate from './pratice/componentDidUpdate';

function App() {
  return (
    <div className="App">
      { /*<Demo />
      <DemoClass />
  <Destruct />
      <State />
      <Effect />
      <UseRef />
      <Context />
      <Reducer/>
      <Callback /> */}
      <ComponentDidmount />
      <ShouldComponentUpdate />
      <Componentwillmount />
      <ComponentDidUpdate />
    </div>
  );
}

export default App;
