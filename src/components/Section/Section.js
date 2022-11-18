import PropTypes from 'prop-types';

import { SectionContainer, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
