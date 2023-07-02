import { useEffect, useState } from "react";

const Countdown = ({ targetDate }: any) => {
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = targetDate.getTime() - currentTime.getTime();

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDifference / (1000 * 60 * 60)) % 24
                );
                const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDifference / 1000) % 60);

                setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            } else {
                setCountdown("The time has passed...");
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return <div>{countdown}</div>;
};

export default Countdown;
