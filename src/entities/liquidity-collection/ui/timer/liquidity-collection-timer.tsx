import React, { useEffect, useState } from "react";
import styles from "./liquidity-collection-timer.module.scss";

interface Timer {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const DEFAULT_TIME = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
};

export const LiquidityCollectionTimer = () => {
    const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);

    const calculateTimeLeft = (): Timer => {
        const difference = +new Date("2023-12-24T00:23:05.07") - +new Date();
        let timeLeft = DEFAULT_TIME;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZero = (value: number) =>
        value < 10 ? `0${value}` : value;

    return (
        <div className={styles.timer}>
            <span>{`${addLeadingZero(timeLeft?.days || 0)}:${addLeadingZero(
                timeLeft?.hours
            )}:${addLeadingZero(timeLeft.minutes)}:${addLeadingZero(
                timeLeft.seconds
            )}`}</span>
        </div>
    );
};
