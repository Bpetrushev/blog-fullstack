import { useEffect, useState } from 'react';
import styles from './Alert.module.css';

enum typeEnums {
  'info',
  'success',
  'error',
}

interface IAlert {
  msg?: string;
  type?: typeEnums;
  time?: number;
}

const Alert: React.FunctionComponent<IAlert> = ({ msg = 'Test msg', type = 'success', time = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, time);
    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {msg}{' '}
      <span className={styles.closebtn} onClick={handleClose}>
        &times;
      </span>
    </div>
  );
};

export default Alert;
