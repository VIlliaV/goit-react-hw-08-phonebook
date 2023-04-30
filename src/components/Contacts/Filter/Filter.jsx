import { Container } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Container>
      <h3>Find contacts by name</h3>
      <input onChange={handleFilter} type="text" name="filter" />
    </Container>
  );
};
