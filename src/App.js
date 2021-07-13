import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import SmoothScrollBar from './components/SmoothScrollBar';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollBar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollBar>
      </Router>
    </>
  );
}
