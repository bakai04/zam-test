import React, { CSSProperties } from "react";
import styles from "./container.module.scss";
import cx from "classnames";

interface IContainer {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const Container = ({ children, style, className }: IContainer) => {
    return (
        <div className={cx(styles.container, className)} style={style}>
            {children}
        </div>
    );
};
