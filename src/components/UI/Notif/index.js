import React from 'react';
import styles from "./index.module.scss";


const Index = ({type, message}) => {
    return (
        <div className={`${styles.notification} ${styles[type]}`}>
            {message}
        </div>
    );
}

export default Index;
