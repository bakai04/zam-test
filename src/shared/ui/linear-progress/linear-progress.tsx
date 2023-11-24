import React, { CSSProperties } from "react";
import styles from "./linear-progress.module.scss";

export interface ILinearProgress {
    value: number;
    maxValue: number;
    color?: string;
    startLabel?: React.ReactNode;
    endLabel?: React.ReactNode;
    mainLabel?: React.ReactNode;
}

export const LinearProgress = (props: ILinearProgress) => {
    const thumbTheme: CSSProperties = {
        color: props.color,
        background: props.color,
        width: `${props.value / (props.maxValue / 100)}%`,
    };

    return (
        <div className={styles.linear_progress}>
            <h4 className={styles.linear_progress__main_label}>
                {props.mainLabel}
            </h4>
            <div className={styles.linear_progress__track}>
                <div
                    className={styles.linear_progress__thumb}
                    style={thumbTheme}
                ></div>
            </div>
            <div
                className={styles.linear_progress__label_block}
                style={{ ...thumbTheme, background: "transparent" }}
            >
                <p className={styles.linear_progress__thumb_label}>
                    {props.startLabel}
                </p>
                <p className={styles.linear_progress__thumb_label}>
                    {props.endLabel}
                </p>
            </div>
        </div>
    );
};
