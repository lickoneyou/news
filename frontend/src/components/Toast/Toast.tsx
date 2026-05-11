import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import { FC, useRef } from 'react';

interface ToastProps {
  message: string;
  isError: boolean;
}

const Toast: FC<ToastProps> = (props) => {
  const { message, isError } = props;

  const toast = useRef(null);

  return createPortal(
    <div
      ref={toast}
      className={`${styles.toast} ${isError ? styles.error : styles.success}`}
    >
      {message}
    </div>,
    document.body,
  );
};

export default Toast;
