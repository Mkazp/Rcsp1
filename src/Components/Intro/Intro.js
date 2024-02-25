import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import styles from './Intro.module.scss';

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000); // 6 секунд

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);

  return (
    isVisible && (
      <div className={`${styles.intro} position-fixed w-100 h-100 d-flex justify-content-center align-items-center`}>
        <div className={`${styles.introCard} card`}>
          <Card.Body>
            <Card.Title>Добро пожаловать в библеотеку</Card.Title>
            <Card.Text>
              Сдесть вы найдёте книги на любой фкус
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    )
  );
};

export default Intro;
