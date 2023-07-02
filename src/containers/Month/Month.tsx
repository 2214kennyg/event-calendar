import { useState } from "react";
import { Day } from "../../components/Day/Day";
import { getMonth } from "../../services/GetMonth";
import styles from "./Month.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Month = ({ events }: any) => {
    let getMonthName = getMonth();
    const [monthInt, setMonthInt] = useState(getMonthName.monthInt + 1);
    const [monthString, setMonthString] = useState(getMonthName.monthString);
    const [year, setYear] = useState(getMonthName.currYear);
    const [blankDayArr, setBlankDayArr] = useState([
        ...Array(getMonthName.firstDayNum - 1).fill(-1),
    ]);
    const [dayArr, setDayArr] = useState([
        ...Array(getMonthName.daysInMonth).keys(),
    ]);
    const [combinedDays, setCombinedDays] = useState([
        ...blankDayArr,
        ...dayArr,
    ]);

    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const setters = () => {
        setMonthString(getMonthName.monthString);
        setYear(getMonthName.currYear);
        setBlankDayArr([...Array(getMonthName.firstDayNum - 1).fill(-1)]);
        const daysInMonthArr = [...Array(getMonthName.daysInMonth).keys()];
        const firstDayIndex = daysOfWeek.findIndex(
            (day) => day === getMonthName.firstDayString
        );
        const shiftedDays = daysInMonthArr.map(
            (day) => (day + firstDayIndex) % 7
        );
        setCombinedDays([
            ...Array(getMonthName.firstDayNum - 1).fill(-1),
            ...shiftedDays,
        ]);
        setDayArr(daysInMonthArr);
    };

    const onPrevMonth = () => {
        getMonthName = getMonth(getMonthName.currYear, monthInt - 1);
        setMonthInt(monthInt - 1);
        setters();
    };

    const onNextMonth = () => {
        getMonthName = getMonth(getMonthName.currYear, monthInt + 1);
        setMonthInt(monthInt + 1);
        setters();
    };

    const getRows = () => {
        let rows: any = [];
        let cells: any = [];
        combinedDays.map((day, i) => {
            day = day + 1;
            if (i % 7 !== 0) {
                cells.push(day);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(day);
            }
            if (i === combinedDays.length - 1) {
                rows.push(cells);
            }
        });
        rows.map((row: any) => {
            if (row.length % 7 !== 0) {
                let newItems = [...Array(7 - (row.length % 7)).fill(0)];
                row.push(...newItems);
            }
        });
        return { rows, cells };
    };

    return (
        <div className={styles.cal}>
            <div className={styles.cal__header}>
                <button onClick={onPrevMonth} className={styles.btn}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h1>
                    {monthString} {year}
                </h1>
                <button onClick={onNextMonth} className={styles.btn}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        {daysOfWeek.map((day) => {
                            return (
                                <th className={styles.table__header} key={day}>
                                    {day}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {getRows().rows.map((date: any) => {
                        return (
                            <tr key={date}>
                                {date.map((dayNum: number, n: number) => {
                                    return (
                                        <td
                                            className={styles.table__cell}
                                            key={n + monthString + year}
                                        >
                                            <Day
                                                dayNum={dayNum}
                                                key={n}
                                                currDate={
                                                    new Date(
                                                        year,
                                                        monthInt - 2,
                                                        dayNum + 1
                                                    )
                                                }
                                                events={events}
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Month;
