import React from 'react';
import styles from './ModalWindow.module.scss';

const ModalChoice = ({ count }) => {
  const choices = [];

  for (let i = 1; i <= count; i++) {
    choices.push(
      <div className={styles.choice} key={i}>
        <div>
          <p>{i}</p>
        </div>
        <div className={styles.choice__line}></div>
      </div>
    );
  }

  return <div className={styles.modal__choice}>{choices}</div>;
};

export default ModalChoice;

// {
//   /* <div className={`${styles.choice} ${styles.choice__active}`}>
//         <div>
//           <p>1</p>
//         </div>
//         <div className={styles.choice__line}></div>
//       </div> */
// }
