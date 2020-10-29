import React from "react";
import PropTypes from "prop-types";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.transactionDescription}>
          <th className={styles.transactionDescriptionItem}>Type</th>
          <th className={styles.transactionDescriptionItem}>Amount</th>
          <th className={styles.transactionDescriptionItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
// "id": "1e0700a2-5183-4291-85cc-2065a036a683",
// "type": "invoice",
// "amount": "964.82",
// "currency": "LRD"
