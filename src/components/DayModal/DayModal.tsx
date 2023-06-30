import styles from "./DayModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import DayForm from "../DayForm/DayForm";

const DayModal = ({ onChange }: any) => {
    const closeModalView = () => {
        onChange();
    };
    return (
        <div className={styles.modalContainer}>
            <div className={styles.outsideModal} onClick={closeModalView}></div>
            <div className={styles.card}>
                <DayForm />
                <div onClick={closeModalView} className={styles.close}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{ color: "black" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DayModal;
