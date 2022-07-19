import { FriendsListItem } from "components/FriendsListItem/FriendsListItem"
import PropTypes from "proptypes"
import styles from '../FriendsList/FriendsList.module.css'
export const FriendsList = ({friends}) => {
    return (
        <ul  className={styles.list}>
        {friends.map(({avatar, name, isOnline, id})=>
            {
                return <FriendsListItem avatar={avatar} userName={name} isOnline={isOnline} key={id} />}
        )}
        </ul>
    )
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };