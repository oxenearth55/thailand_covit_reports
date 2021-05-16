import './App.css'
import './Responsive.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './main/Home'
import { Provider } from 'react-redux'
import store from './store'
import Menu from './Menu-footer/Menu'
import Footer from './Menu-footer/Footer'
import Daily from './main/Daily'
import Compare from './main/Compare'
import Infro from './Components/Intro'

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid px-0">
            <Menu/>
            <Infro/>
            <Switch>
              <Route exact path='/' component={Home}/> 
              <Route exact path='/daily' component={Daily}/>
              <Route exact path='/compare' component={Compare}/>
            </Switch>  
            <Footer/>    
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
