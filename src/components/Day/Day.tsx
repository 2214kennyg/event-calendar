import styles from "./Day.module.scss";
import { useState } from "react";
import DayModal from "../DayModal/DayModal";

export const Day = ({ dayNum }: any) => {
    const [openModal, setopenModal] = useState(false);
    const openModalView = () => {
        setopenModal(true);
    };
    const closeModalView = () => {
        setopenModal(false);
    };

    return dayNum !== 0 ? (
        <>
            <>
                <div className={styles.card} onClick={openModalView}>
                    {dayNum}
                </div>
            </>
            {openModal ? <DayModal onChange={closeModalView} /> : <></>}
        </>
    ) : (
        <div className={styles.card}>
            <p></p>
        </div>
    );
};
