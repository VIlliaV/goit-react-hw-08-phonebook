import { Container } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { InputName } from 'components/Form';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <h3>Find contacts by name</h3>
      <InputName props={{ register, errors, handleFilter }} />
    </Container>
  );
};
