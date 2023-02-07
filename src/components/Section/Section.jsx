import PT from 'prop-types';
import css from '../Section/Section.module.css'

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PT.string,
  children: PT.node,
};