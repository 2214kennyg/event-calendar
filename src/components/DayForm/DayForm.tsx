import { useState } from "react";
import { validateDates } from "../../services/helper";
import { addNewEvent } from "../../services/services";
import styles from "./DayForm.module.scss";

const DayForm = ({ currDate }: any) => {
    const initialState = {
        eventName: "",
        startDate: "",
        endDate: "",
        label: "",
        location: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState({ isPresent: false, message: "" });

    const formChange = (e: any) => {
        const { value, id } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            validateDates(formData.startDate, formData.endDate);
            setError({ isPresent: false, message: "" });
            addNewEvent(formData);
        } catch (e: any) {
            setError({ isPresent: true, message: e.message });
        }
    };
    return (
        <div>
            <form className={styles.form} onSubmit={onSubmit}>
                <label htmlFor="eventName">Event name:</label>
                <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    onChange={formChange}
                    required
                />
                <label htmlFor="startDate">Start date:</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    min={currDate.toISOString().split("T")[0]}
                    onChange={formChange}
                    required
                />
                <label htmlFor="endDate">End date:</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    min={currDate.toISOString().split("T")[0]}
                    onChange={formChange}
                    required
                />
                <label htmlFor="label">Label:</label>
                <input
                    type="text"
                    id="label"
                    name="label"
                    onChange={formChange}
                    required
                />
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={formChange}
                    required
                />
                <button className={styles.form__btn} type="submit">
                    Submit
                </button>
            </form>
            {error.isPresent && <p className={styles.error}>{error.message}</p>}
        </div>
    );
};

export default DayForm;
