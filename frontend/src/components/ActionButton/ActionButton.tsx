import React, { FC } from 'react';
import styles from './styles.module.css';

interface ActionButtonProps {
  action: () => void;
  label: string;
}

const ActionButton: FC<ActionButtonProps> = (props) => {
  const { action, label } = props;

  return (
    <button className={styles.btn} onClick={action}>
      {label}
    </button>
  );
};

export default ActionButton;
