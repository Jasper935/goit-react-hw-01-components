import PropTypes from 'prop-types'
import styles from '../StatsListItem/StatsListItem.module.css'
export const StatsListItem = ({ label, percentage, id }) => {
  return (

    <li key={id} className={styles.item}>
      <span className="label">{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  )
}

StatsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string
}