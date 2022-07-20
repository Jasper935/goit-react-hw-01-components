import PropTypes from 'prop-types';
import styles from '../StatsList/StatsList.module.css'
import { StatsListItem } from 'components/StatsListItem/StatsListItem';
export const StatsList = ({ StatsData }) => {
    return (
        <ul className={styles.statList}>
            {StatsData.map(({ id, label, percentage }) =>
                <StatsListItem label={label} percentage={percentage} key={id} />
            )}
        </ul>
    )
}
StatsList.propTypes = {
    StatsData: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
        id: PropTypes.string
    })),

}