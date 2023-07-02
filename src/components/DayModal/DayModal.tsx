import styles from "./DayModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import DayForm from "../DayForm/DayForm";

const DayModal = ({ onChange }: any) => {
    const closeDayModal = () => {
        onChange();
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.outsideModal} onClick={closeDayModal}></div>
            <div className={styles.card}>
                <DayForm />
                <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "black" }}
                    onClick={closeDayModal}
                />
            </div>
        </div>
    );
};

export default DayModal;
