import logo from './logo.svg';
import './App.css';
import Company from './components/company/Company';
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';
import ContactForm from './components/ContactForm/ContactForm';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';

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
     <hr />
     <ContactForm />
     <hr />
     <Users />
     <hr />
     <Posts />
    </div>
  );
}

export default App;
