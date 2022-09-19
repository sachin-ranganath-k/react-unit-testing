import logo from './logo.svg';
import './App.css';
import Company from './components/company/Company';
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
     <b>texts</b>
     <p>Hello</p>

     <Company name="Cognizant Technology Solutions"/>
     <hr />
     <Counter />
     <hr />
     <Todo />
    </div>
  );
}

export default App;
