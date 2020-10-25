import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/common/Header';
import Login from './components/Login';
import {Provider as AuthProvider} from './context/AuthContext';
import { Provider as TaskProvider} from './context/TaskContext';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
          </Switch>
        </Router>
        </div>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
