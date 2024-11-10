import React, { useState, useContext } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { addNewToast } = useContext(ToastContext)
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('notice')

  function handleSubmit(e) {
    e.preventDefault()
    addNewToast(message, variant)
    setMessage('')
    setVariant('notice')
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>

          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea required id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {
              VARIANT_OPTIONS.map(value =>
                <label htmlFor={`variant-${value}`} key={value}>
                  <input
                    id={`variant-${value}`}
                    type="radio"
                    name="variant"
                    value={value}
                    checked={variant === value}
                    onChange={() => setVariant(value)}
                  />
                  {value}
                </label>
              )
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
