import React from "react";
import styles from "./liquidity-banner.module.scss";
import { LiquidityCollection } from "@/entities";

export const LiquidityBanner = () => {
    return (
        <div className={styles.liquidity_banner}>
            <LiquidityCollection />
        </div>
    );
};
