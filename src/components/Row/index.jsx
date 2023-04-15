import PropTypes from 'prop-types';

import './Row.css';

const Section = ({ children }) => {
  return (
    <section className="movies-list">
      { children }
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
