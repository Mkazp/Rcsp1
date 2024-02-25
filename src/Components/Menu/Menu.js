import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss'; // Импортируем стили

const Menu = () => {
  return (
    <Navbar className={styles.menu} bg="dark" variant="dark" expand="lg">
      <Container className={styles.container}>
        <Navbar.Brand className={styles.brand} as={NavLink} to="/" exact>
          <img
            src="/frontend/library/public/th-103304673.jpg" // Замените путь на путь к вашему изображению
            width="30"
            height="30"
            className={`d-inline-block align-top ${styles.brandImg}`} // Добавляем стиль для изображения
            alt=""
          />
          {' '}
          Библиотека
        </Navbar.Brand>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/Achivment" activeClassName="active" className={styles.navLink}>
              Каталог
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
