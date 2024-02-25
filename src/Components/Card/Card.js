import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Азбука</h2>
      <p className={styles.text}>
        Азбука - это система графических знаков, предназначенных для записи языка или речи. 
        Обычно азбука состоит из отдельных символов, называемых буквами, которые представляют собой звуки алфавита.
        Алфавит упорядочен так, чтобы каждая буква представляла определенный звук или группу звуков в языке, 
        позволяя записывать слова и предложения.
      </p>
    </div>
  );
};

export default Card;