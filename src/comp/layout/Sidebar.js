import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className={ 'side-bar'}>
    <ul>
      <Link to={ '/home' }><li>Home</li></Link>
      <Link to={ '/contact-list'}><li>Buscar</li></Link>
      <a href={ '/afuera'}><li>Afuera</li></a>
    </ul>
  </div>
);

export default SideBar;
