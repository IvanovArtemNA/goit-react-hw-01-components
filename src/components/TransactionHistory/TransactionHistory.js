import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const Transaction = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td> {transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.array.isRequired,
};
