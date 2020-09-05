import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  const pages = [
    {
      path: '/student', name: 'Student'
    },
    {
      path: '/teacher', name: 'Teacher'
    },
  ]

  return (
    <section className="home-content">
      <ul className="home-content__page-list">
        { pages.map(page => (
          <li className="home-content__pages-list__item">
            <Link to={page.path}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
