import React from 'react';
import styles from "./index.module.scss";

const Index = ({type, name, placeholder, required, onChange, value}) => {
    return (
        <input className={styles.wrapper} type={type} name={name} placeholder={placeholder} required={required} onChange={onChange} value={value} />
    );
}

export default Index;