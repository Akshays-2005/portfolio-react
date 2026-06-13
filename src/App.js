import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

export default App;
