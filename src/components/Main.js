import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login/Login'

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Login}/>
            </Switch>
        </div>
    )
}

export default Main;
