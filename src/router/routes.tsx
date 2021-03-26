import { Route, Redirect, Switch } from 'react-router-dom';

import Login from '../components/login';
import Form from '../components/form';
import List from '../components/list';

export const Path = {
    login: "/login",
    form: "/",
    list: "/list"
}

const routes = (
    <Switch>
        <Route exact path={Path.login} component={Login} />
        <Route exact path={Path.form} component={Form} />
        <Route exact path={Path.list} component={List} />
        <Redirect to={Path.form} />
    </Switch>
);

export default routes;