import React from "react";
import styles from "./liquidity-collection.module.scss";
import { Chip, Icons, LinearProgress, Button } from "@/shared/ui";
import { LiquidityCollectionTimer } from "./ui/timer";
import { LiquidityCollectionInform } from "./ui/inform";

export const LiquidityCollection = () => {
    return (
        <div className={styles.liquidity_collection}>
            <div className={styles.liquidity_collection__head}>
                <h2 className={styles.liquidity_collection__title}>
                    $INF <span>Liquidity Collection</span> Ends In:
                </h2>
                <Chip type="secondary">$INF = $0.20125</Chip>
            </div>

            <div className={styles.liquidity_collection__timer}>
                <LiquidityCollectionTimer />
                <Chip type="primary" suffix={<Icons.Question />}>
                    + SUBINF = $0.234628
                </Chip>
            </div>

            <div className={styles.liquidity_collection__progress}>
                <p className={styles.liquidity_collection__participants}>
                    Participants: <span>3,083</span>
                </p>
                <LinearProgress
                    maxValue={100}
                    value={45}
                    mainLabel="Progress:"
                    startLabel="45%"
                    endLabel="$20,000"
                />
            </div>
            <LiquidityCollectionInform />
            <Button className={styles.liquidity_collection__button}>
                Invest in INF <span>Min: 2 USDT</span>
            </Button>
        </div>
    );
};
