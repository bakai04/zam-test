import cx from "classnames";
import React, { ButtonHTMLAttributes, forwardRef, useState } from "react";
import styles from "./button.module.scss";

export type IButton = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "prefix" | "suffix"
> & {
    size?: "small" | "medium" | "large" | "regular" | "ex_small";
    loading?: boolean;
    htmlType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    svgOnly?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    icon?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, IButton>(
    (
        {
            htmlType,
            size,
            className,
            children,
            onClick: propsOnClick,
            svgOnly,
            prefix,
            suffix,
            loading: propsLoading,
            ...restProps
        },
        ref
    ) => {
        const [localLoading, setLocalLoading] = useState(false);

        const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (localLoading || propsLoading || restProps.disabled) return;
            try {
                setLocalLoading(true);
                propsOnClick?.(e);
            } finally {
                setLocalLoading(false);
            }
        };

        const loading = propsLoading || localLoading;

        return (
            <button
                className={cx(
                    styles.button,
                    size === "small" && styles.small,
                    size === "medium" && styles.medium,
                    size === "regular" && styles.large,
                    size === "ex_small" && styles.large,

                    svgOnly && styles.svg_only,
                    loading && styles.loading,
                    className
                )}
                type={htmlType}
                onClick={onClick}
                ref={ref}
                {...restProps}
            >
                {loading && <div className={styles.loader}>...</div>}
                {!loading && prefix}
                {children}
                {suffix}
            </button>
        );
    }
);

Button.displayName = "Button";
