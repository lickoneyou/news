'use client';

import React, { useCallback, useState } from 'react';
import styles from './styles.module.css';
import ActionButton from '../ActionButton';
import Modal from '../Modal';

type ModalType = 'login' | 'register';

interface ModalContent {
  action: () => void;
  title: string;
  actionButtonLabel: string;
}

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    action: () => {},
    title: '',
    actionButtonLabel: '',
  });

  const createModalContent = useCallback((type: ModalType): void => {
    if (typeof type === 'string') {
      const modalContent = {
        action: () => {},
        actionButtonLabel: type === 'login' ? 'Enter' : 'Register',
        title: type[0].toUpperCase() + type?.slice(1),
      };
      setModalContent(modalContent);
    }
  }, []);

  const toggleModal = useCallback(
    (modalType?: ModalType): void => {
      setIsShowModal((prev) => !prev);

      if (modalType) {
        createModalContent(modalType);
      }
    },
    [createModalContent],
  );

  return (
    <header className={styles.header}>
      <h1>News</h1>
      <div className={styles.action_wrapper}>
        <ActionButton action={() => toggleModal('login')} label='Login' />
        <ActionButton action={() => toggleModal('register')} label='Register' />
        {isShowModal && <Modal toggleModal={toggleModal} {...modalContent} />}
      </div>
    </header>
  );
};

export default Header;
