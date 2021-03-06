import PropTypes from 'prop-types';
import styles from './Home.module.css';
import logo from '../../assets/images/react-logo.png';

const Home = ({ title }) => {
    return (
        <div className={styles.home}>
            <div className={styles.imgBox}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.title}>{title}</div>
        </div>
    );
};

Home.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Home;
