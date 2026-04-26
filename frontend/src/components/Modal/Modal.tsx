'use client';
import React, { FC, MouseEvent, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import ActionButton from '../ActionButton';

interface ModalProps {
  action: () => void;
  toggleModal: () => void;
  title: string;
  actionButtonLabel: string;
}

const Modal: FC<ModalProps> = (props) => {
  const { action, title, actionButtonLabel, toggleModal } = props;
  const overlay = useRef(null);

  const closeModalOverlay = useCallback(
    (event: MouseEvent) => {
      if (event.target === overlay.current) {
        toggleModal();
      }
    },
    [toggleModal],
  );

  return createPortal(
    <div ref={overlay} onClick={closeModalOverlay} className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.title}>{title}</p>
        <form className={styles.form_wrapper}>
          <input type={'text'} placeholder={'login'} autoComplete='username' />
          <input
            type='password'
            placeholder={'password'}
            autoComplete='current-password'
          />
        </form>
        <div className={styles.actions_wrapper}>
          <ActionButton action={action} label={actionButtonLabel} />
          <ActionButton action={toggleModal} label='Close' />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
