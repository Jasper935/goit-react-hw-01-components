import PropTypes from 'prop-types'
import styles from '../Profile/Profile.module.css'
export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          className={styles.avatar}
          src={avatar}
          alt={username}
          width="200"
        />
        <p className={styles.title}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={styles.item}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={styles.item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,

}



