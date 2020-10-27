import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Provider as AuthProvider} from './context/AuthContext';
import { Provider as TaskProvider} from './context/TaskContext';

import Home from './components/Home';
import Header from './components/common/Header';
import Login from './components/Login';
import Footer from './components/common/Footer';
import TasksList from './components/TasksList';
import Register from './components/Register/Register';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>        
        <Router>
          <Header />
          <div className="App container py-5">
          <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/mytasks'>
                <TasksList />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
          </div>
          <Footer />
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
