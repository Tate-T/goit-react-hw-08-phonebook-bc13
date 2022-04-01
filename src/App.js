import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { fetchCurrentUser } from './redux/auth/authOperations';
import { getIsFetchingCurrent } from './redux/auth/authSelectors';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView/PhonebookView'));
// const UploadView = lazy(() => import('./views/UploadView'));

// const styles = {
//   header: {
//     marginTop: '250px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: '100px',
//     color: 'rgb(38, 17, 53)',
//     textShadow: '5px 5px 5px indigo',
//     fontStyle: 'italic'
//   },
// };

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем</h1>
      ) : (
        <>
          <AppBar />
          {/* <header style={styles.header}>
        PHONEBOOK
      </header> */}

          <Suspense fallback={<p>Загружаем...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/phonebook" redirectTo="/login">
              <PhonebookView />
            </PrivateRoute>
            {/* <PrivateRoute path="/upload" redirectTo="/login">
              <UploadView />
            </PrivateRoute> */}
          </Suspense>
        </>
      )};
    </Container>
  );
}
