import PropTypes from 'prop-types';
import { Container } from './Filter.styled';

export const Filter = ({ handleFilter }) => {
  return (
    <Container>
      <h3>Find contacts by name</h3>
      <input onChange={e => handleFilter(e)} type="text" name="filter" />
    </Container>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
