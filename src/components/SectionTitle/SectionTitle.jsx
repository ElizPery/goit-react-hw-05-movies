import { Title } from "./SectionTitle.styled";
import PropTypes from 'prop-types';

const SectionTitle= ({ title }) => {
  return (
      <Title>{title}</Title>
  );
}

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
}
