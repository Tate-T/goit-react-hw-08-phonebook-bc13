import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/authSelectors';

export default function PublicRoute({
    children,
    redirectTo = '/',
    restricted,
    ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn && restricted ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}