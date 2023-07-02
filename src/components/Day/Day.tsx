import styles from "./Day.module.scss";
import { useEffect, useState } from "react";
import DayModal from "../DayModal/DayModal";
import { EventCard } from "../EventCard/EventCard";

export const Day = ({ dayNum, currDate, events }: any) => {
    const [openModal, setopenModal] = useState(false);
    const openDayModal = () => {
        setopenModal(true);
    };
    const closeDayModal = () => {
        setopenModal(false);
    };

    const [dayEvents, setDayEvents] = useState([]);

    useEffect(() => {
        const newEvents = events.filter((event: any) => {
            return (
                event.startDate.split("T")[0] ==
                currDate.toISOString().split("T")[0]
            );
        });
        setDayEvents(newEvents);
    }, [events]);

    return dayNum !== 0 ? (
        <>
            <>
                <div className={styles.card} onClick={openDayModal}>
                    {dayNum}
                </div>
                <div className={styles.event}>
                    {dayEvents.map((event: any) => {
                        return <EventCard key={event.id} event={event} />;
                    })}
                </div>
            </>
            {openModal ? <DayModal onChange={closeDayModal} /> : <></>}
        </>
    ) : (
        <div className={styles.card}>
            <p></p>
        </div>
    );
};
