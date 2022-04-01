import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Image from 'react-bootstrap/Image';

const styles = {
    form: {
        width: 320,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
};

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <ThemeProvider
            breakpoints={(
                {
                    xs: '0',
                    sm: '576px',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                    xxl: '1400px'
                }
            )}
        >
            <div>
                <h1>Registration page</h1>

                <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
                    <label style={styles.label}>
                        Name
                        <input type="text" name="name" value={name} onChange={handleChange} />
                    </label>

                    <label style={styles.label}>
                        Login (email)
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </label>

                    <label style={styles.label}>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit">Sign up</button>
                </form>
                <Image class="img-fluid img-thumbnail" />
            </div>
        </ThemeProvider>
    );
}