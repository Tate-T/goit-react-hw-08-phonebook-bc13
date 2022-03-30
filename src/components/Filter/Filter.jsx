import { connect } from 'react-redux';
import { getContacts } from '../../redux/contactsOperations';
import s from './Filter.module.css';

const Filter = ({ filter, addToFilterState }) => {

    return (
        <div className={s.filter}>
            <label className={s.filterTitle}>
                Find contact by name
                <input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={(e) => { addToFilterState(e.target.value) }}
                    className={s.filterInput}
                />
            </label>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFilterState: (filter) => dispatch(getContacts(filter)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
