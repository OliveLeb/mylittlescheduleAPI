import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/commun/Header';
import Home from './components/Home';
import Login from './components/Login';
import { Provider as AuthProvider} from './context/AuthContext';
import FetchTasks from './actions/FetchTasks';


function App() {

  const {tasks} = FetchTasks();

  return (
    
      <div className="App">
        <Router>
          <AuthProvider>
            <Header />
              <Switch>
                <Route exact path='/'>
                  <Home tasks={tasks}/>
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
              </Switch>
            </AuthProvider>
        </Router>
      </div>
      
    
  );
}

export default App;
