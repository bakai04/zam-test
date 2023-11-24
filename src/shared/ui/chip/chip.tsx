import React, { HTMLAttributes, useMemo } from "react";
import cx from "classnames";
import styles from "./chip.module.scss";

interface IChip
    extends Omit<HTMLAttributes<HTMLDivElement>, "prefix" | "suffix"> {
    type: "primary" | "secondary";
    children: React.ReactNode;

    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}

export const Chip = ({
    className,
    type,
    children,
    prefix,
    suffix,
    ...rest
}: IChip) => {
    return (
        <div
            className={cx(
                styles.chip,
                type === "secondary" && styles.chip_secondary,
                className
            )}
            {...rest}
        >
            {prefix}
            {children}
            {suffix}
        </div>
    );
};
