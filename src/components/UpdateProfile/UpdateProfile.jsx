import { useState } from 'react';
import { StyledContainer } from './UpdateProfile.styled';
import { ButtonType } from 'components/Form';
import { updateAvatar } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UpdateProfile = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    dispatch(updateAvatar(file));
    navigate('/profile');
  };

  return (
    <StyledContainer>
      <input type="file" onChange={handleChange} />
      <ButtonType type="button" onClick={handleUpload}>
        upload
      </ButtonType>
    </StyledContainer>
  );
};
