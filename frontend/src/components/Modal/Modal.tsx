'use client';
import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import ActionButton from '../ActionButton';
import { useUser } from '@/src/store/user/user.context';

interface ModalProps {
  toggleModal: () => void;
  title: string;
  actionButtonLabel: string;
}

interface Form {
  login: string;
  password: string;
}

const Modal: FC<ModalProps> = (props) => {
  const { title, actionButtonLabel, toggleModal } = props;
  const [form, setForm] = useState<Form>({
    login: '',
    password: '',
  });
  const overlay = useRef(null);

  const { createUser } = useUser();

  const closeModalOverlay = useCallback(
    (event: MouseEvent) => {
      if (event.target === overlay.current) {
        toggleModal();
      }
    },
    [toggleModal],
  );

  const changeFieldState = useCallback(
    (event: ChangeEvent<HTMLInputElement>, key: string) => {
      setForm((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    },
    [],
  );

  return createPortal(
    <div ref={overlay} onClick={closeModalOverlay} className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.title}>{title}</p>
        <form className={styles.form_wrapper}>
          <input
            type={'text'}
            placeholder={'login'}
            autoComplete='username'
            value={form.login}
            onChange={(event) => changeFieldState(event, 'login')}
          />
          <input
            type='password'
            placeholder={'password'}
            autoComplete='current-password'
            value={form.password}
            onChange={(event) => changeFieldState(event, 'password')}
          />
        </form>
        <div className={styles.actions_wrapper}>
          <ActionButton action={() => createUser(form)} label={actionButtonLabel} />
          <ActionButton action={toggleModal} label='Close' />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
