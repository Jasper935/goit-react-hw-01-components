import PropTypes from 'prop-types'
import styles from '../Section/Section.module.css'
export const Section = ({ title='Upload stats', children }) => {

    return <section className={styles.statistics}> {title && <h2 className={styles.title}>{title}</h2>}{children}</section>
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
  
}

