import { useState } from "react";
import styles from "./EventFilter.module.scss";

const EventFilter = ({ onFilter }: any) => {
    const [filterType, setFilterType] = useState("");
    const [filterValue, setFilterValue] = useState("");

    const applyFilter = () => {
        onFilter(filterType, filterValue);
    };

    return (
        <div>
            <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
            >
                <option value="">None</option>
                <option value="label">Label</option>
                <option value="location">Location</option>
            </select>
            <input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
            />
            <button className={styles.btn} onClick={applyFilter}>
                Filter
            </button>
        </div>
    );
};

export default EventFilter;
