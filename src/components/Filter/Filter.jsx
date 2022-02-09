
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
                    onChange={addToFilterState}
                    className={s.filterInput}
                />
            </label>
        </div>
    );
}

export default Filter