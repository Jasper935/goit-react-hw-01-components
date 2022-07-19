import styles from '../FriendsListItem/FriendsListItem.module.css'
import PropTypes from "proptypes"
export const FriendsListItem = ({ avatar, userName, isOnline, id }) => {
  return (
    <li key={id} className={styles.item}>
      {isOnline ? (<span className={styles.green}></span>) : (<span className={styles.red}></span>)}
      <img className="avatar" src={avatar} alt={userName} width="48" />
      <p className={styles.text}>{userName}</p>
    </li >
  )
}
FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};