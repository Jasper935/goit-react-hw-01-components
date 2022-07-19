import PropTypes from 'prop-types'
import styles from '../TransactionHistory/TransactionHistory.module.css'
export const TransactionHistory=({transactions})=>{
    return(
<table className={styles.table}>
  <thead >
    <tr>
      <th  className={styles.title}>Type</th>
      <th  className={styles.title}>Amount</th>
      <th  className={styles.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({id, type, amount, currency})=>
    <tr key={id}>
    <td className={styles.type}>{type}</td>
    <td className={styles.amount}>{amount}</td>
    <td className={styles.currency}>{currency}</td>
  </tr>
    )}
    
    
  </tbody>
</table>
    )
}