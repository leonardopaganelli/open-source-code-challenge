import React from 'react';

import { Link } from 'react-router-dom';

const Teacher = () => {
  return (
    <section className="teacher-content">
      Teacher Page
      <Link to="/">
        Home
      </Link>
    </section>
  );
};

export default Teacher;
