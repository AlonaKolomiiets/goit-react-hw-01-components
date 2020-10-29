import React from "react";
import PropTypes from "prop-types";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

//   id — уникальный идентификатор транзакции
//   type — тип транзакции
//   amount - сумма транзакции
//   currency - тип валюты
