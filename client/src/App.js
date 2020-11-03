import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Context as AuthContext} from './context/AuthContext';
import { Provider as AdminProvider } from './context/AdminContext'
import { Context as TaskContext} from './context/TaskContext';

import http from './http.common';
import TaskService from './services/userTasks';

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
import { useFetch } from './hooks/useFetch';


function App() {

  const {isLogged,token} = useContext(AuthContext);
  const {tasks,fetch,loading,fetchError} = useContext (TaskContext);

  http.interceptors.request.use((config)=>{
    
      if(token.value) config.headers.common['x-access-token'] = token.value;
      return config;
  },
      error => Promise.reject(error)
  );

  useFetch(TaskService,fetch,loading,fetchError,isLogged,tasks);



  return (
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
  );
}

export default App;
