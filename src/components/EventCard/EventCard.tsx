import { useState } from "react";
import styles from "./EventCard.module.scss";
import EventModal from "../EventModal/EventModal";

export const EventCard = ({ event }: any) => {
    const [eventModal, setEventModal] = useState(false);
    const openEventModal = () => {
        setEventModal(true);
    };
    const closeEventModal = () => {
        setEventModal(false);
    };

    return (
        <>
            <div onClick={openEventModal}>
                <div className={styles.card}>{event.eventName}</div>
            </div>
            {eventModal ? (
                <EventModal onChange={closeEventModal} event={event} />
            ) : (
                <></>
            )}
        </>
    );
};
