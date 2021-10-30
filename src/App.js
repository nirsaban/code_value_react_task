
import './App.css';
import HomePage from './pages/home/home.page';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component'
import 'bootstrap/dist/css/bootstrap.min.css';


const  App =   () => {
  return (
    <div>
    <Header title = {"My Store"}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
