import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AuthProvider } from './context/AuthContext';
import { Provider as TaskProvider } from './context/TaskContext';
import { Provider as AdminProvider } from './context/AdminContext'

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Account from './pages/Account';

import Header from './components/common/Header';
import Login from './components/Login';
import Footer from './components/common/Footer';
import Register from './components/Register/Register';
import AdminPanel from './components/AdminPanel';

import LoggedRoute from './HOC/LoggedRoute';
import AdminRoute from './HOC/AdminRoute';



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
                <Tasks />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <LoggedRoute path='/myaccount'>
              <Account />
            </LoggedRoute>
            <AdminProvider>
              <AdminRoute path='/dashboard'>
                <AdminPanel />
              </AdminRoute>
            </AdminProvider>
          </Switch>
          </div>
          <Footer />
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
