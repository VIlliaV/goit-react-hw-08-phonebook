import { useState } from 'react';

export const UpdateProfile = () => {
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // dispatch upload
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={handleUpload}>
        upload
      </button>
    </>
  );
};
