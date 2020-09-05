import React from 'react';

import { Link } from 'react-router-dom';

const Student = () => {
  return (
    <section className="student-content">
      Student Page
      <Link to="/">
        Home
      </Link>
    </section>
  );
};

export default Student;
