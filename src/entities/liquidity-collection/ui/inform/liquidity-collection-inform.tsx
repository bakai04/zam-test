import React, { useEffect, useState } from "react";
import styles from "./liquidity-collection-inform.module.scss";
import { Icons } from "@/shared/ui";

const data = [
    {
        label: "Min. Liquidity Pool",
        value: "50,000 USDT",
    },
    {
        label: "Max. Allocation",
        value: "$500",
    },
    {
        label: (
            <>
                Lock of the portfolio for initial investors{" "}
                <span>from 6 months</span>
            </>
        ),
        icon: <Icons.GreyError />,
    },
];

export const LiquidityCollectionInform = () => {
    return (
        <div className={styles.inform}>
            {data.map((item, key) => (
                <div className={styles.inform__item} key={key}>
                    {item.icon}
                    <div>
                        <p className={styles.inform__label}>{item.label}</p>
                        <p className={styles.inform__value}>{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
