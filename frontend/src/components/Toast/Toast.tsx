import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import { FC, useRef } from 'react';
import { Message } from '@/src/types/types';

interface ToastProps {
  message: string;
  isError: boolean;
  isVisible: Message | null;
}

const Toast: FC<ToastProps> = (props) => {
  const { message, isError, isVisible } = props;

  const toast = useRef(null);

  if (!isVisible) {
    return null;
  }

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
