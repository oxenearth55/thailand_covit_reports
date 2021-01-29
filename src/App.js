import './App.css'
import './Responsive.css'
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './main/Home'
import { Provider } from 'react-redux'
import store from './store'
import Menu from './Menu-footer/Menu'
import Footer from './Menu-footer/Footer'
import Daily from './main/Daily'
import Compare from './main/Compare'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route>
          <div className="container-fluid px-0">
            <Menu/>
            <Switch>
              <Route exact path='/' component={Home}/> 
              <Route exact path='/daily' component={Daily}/>
              <Route exact path='/compare' component={Compare}/>
            </Switch>  
            <Footer/>    
          </div>
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
