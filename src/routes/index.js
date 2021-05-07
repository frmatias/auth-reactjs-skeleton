import { Switch } from 'react-router-dom';

import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/register" component={SignUp}/>
            <Route exact path="/dashboard" isPrivate  component={Dashboard}/>

        </Switch>
    )
}
export default Routes;