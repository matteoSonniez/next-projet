import React from 'react';
import styles from "./index.module.scss";

const Index = ({className, type, title, handleClick}) => {
    return (
        <button className={`${styles.btn} ${styles[className]}`} type={type} onClick={handleClick}>
            {title}
        </button>
    );
}

export default Index;
