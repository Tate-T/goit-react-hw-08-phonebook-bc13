import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import PhonebookView from './views/PhonebookView/PhonebookView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container/Container';
import { fetchCurrentUser } from './redux/auth/authOperations';

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

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {/* <header style={styles.header}>
        PHONEBOOK
      </header> */}

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/phonebook" component={PhonebookView} />
      </Switch>
    </Container>
  );
}
