import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Example1 from './components/examples/Example1';
import Example2 from './components/examples/Example2';
import Example3 from './components/examples/Example3';
import Example4 from './components/examples/Example4';
import Todo from './components/todolist/Todo';
import ApiExample from './components/examples/ApiExample';
import { useState } from "react";
import { Navbar } from 'react-bootstrap'
import ButtonMode from './components/layout/ButtonMode'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark-theme bg-dark' : 'light-theme bg-white'}>

      <div className="App">
        <Navbar className={darkTheme ? 'navbar-dark bg-dark' : 'navbar-white bg-white'}>
          <Navbar.Brand href="home">
            Cours React
          </Navbar.Brand>
          <ButtonMode
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme} />
        </Navbar>
        <br />
        <Todo />
        <p>------------------</p>
        <Example1 />
        <p>------------------</p>
        <Example2 />
        <p>------------------</p>
        <Example3 />
        <p>------------------</p>
        <Example4 />
      </div>
    </div>
  );
}

export default App;
