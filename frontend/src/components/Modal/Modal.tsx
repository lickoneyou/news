'use client';
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import ActionButton from '../ActionButton';
import { useUser } from '@/src/store/user/user.context';
import { Message } from '@/src/types/types';

interface ModalProps {
  toggleModal: () => void;
  title: string;
  actionButtonLabel: string;
  setToast: Dispatch<SetStateAction<Message | null>>;
  toast: Message | null;
}

interface Form {
  email: string;
  password: string;
}

const Modal: FC<ModalProps> = (props) => {
  const { title, actionButtonLabel, toggleModal, toast, setToast } = props;
  const [form, setForm] = useState<Form>({
    email: '',
    password: '',
  });
  const overlay = useRef(null);

  const { createUser, login } = useUser();

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

  const sendForm = useCallback(async () => {
    if (title.toLowerCase() === 'login') {
      const message = await login(form);
      if (message) {
        setToast({
          message: message.message ?? '',
          statusCode: message.statusCode ?? 200,
        });

        setTimeout(() => setToast(null), 3000);
      }
    } else {
      const message = await createUser(form);
      if (message) {
        setToast({
          message: message.message ?? '',
          statusCode: message.statusCode ?? 200,
        });

        setTimeout(() => setToast(null), 3000);
      }
    }
  }, [title, login, form, setToast, createUser]);

  useEffect(() => {
    if (toast?.statusCode === 200) {
      toggleModal();
    }
  }, [toast?.statusCode, toggleModal]);

  return createPortal(
    <div ref={overlay} onClick={closeModalOverlay} className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.title}>{title}</p>
        <form className={styles.form_wrapper}>
          <input
            type={'text'}
            placeholder={'login'}
            autoComplete='username'
            value={form.email}
            onChange={(event) => changeFieldState(event, 'email')}
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
          <ActionButton action={sendForm} label={actionButtonLabel} />
          <ActionButton action={toggleModal} label='Close' />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
