import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../services/helper";
import styles from "./EventModal.module.scss";
import Countdown from "../Countdown/Countdown";

const EventModal = ({ event, onChange }: any) => {
    const closeEventModal = () => {
        onChange();
    };

    return (
        <div className={styles.modalContainer}>
            <div
                className={styles.outsideModal}
                onClick={closeEventModal}
            ></div>
            <div className={styles.card}>
                <div className={styles.card__info}>
                    <div>Event: {event.eventName}</div>
                    <div>
                        Start: {formatDate(event.startDate.split("T")[0])}
                    </div>
                    <div>End: {formatDate(event.endDate.split("T")[0])}</div>
                    <div>Location: {event.location}</div>
                    <div>Label: {event.label}</div>
                    <div>
                        Time Left:{" "}
                        <Countdown targetDate={new Date(event.endDate)} />
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "black" }}
                    onClick={closeEventModal}
                />
            </div>
        </div>
    );
};

export default EventModal;
