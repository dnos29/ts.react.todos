import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import { About } from './pages/About'
import { Tasks } from './pages/Tasks'
import { Home } from './pages/Home'
import { Task } from './pages/Task';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
          </nav>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tasks" exact>
          <Tasks />
        </Route>
        <Route path="/tasks/:id">
          <Task />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
