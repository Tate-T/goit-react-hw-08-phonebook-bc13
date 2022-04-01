import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { authSelectors } from '../../redux/auth/authSelectors';

import defaultAvatar from './defaultAvatar.jpg';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Wellcome, {name}</span>
            <button type="button" onClick={() => dispatch(logOut())}>
                Log out
            </button>
        </div>
    );
}