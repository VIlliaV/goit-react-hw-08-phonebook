export const textFieldStyle = {
  boxShadow: '2px 2px 4px rgba(170, 249, 190, 0.742)',
  '&:hover ': {
    // borderColor: 'rgba(170, 249, 190, 0.742)',
    boxShadow: '3px 3px 6px rgba(170, 249, 190, 0.742)',
  },
  '& .MuiOutlinedInput-root': {
    color: 'rgb(255, 255, 255)',
    '& fieldset': {
      borderColor: 'rgb(87, 100, 90)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(170, 249, 190, 0.742)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(255, 255, 255)',
    },
  },
  backgroundColor: 'rgb(29, 45, 34)',
  '& label.Mui-focused': {
    color: 'rgb(255, 255, 255)',
  },
  '& label': {
    color: 'rgb(87, 100, 90)',
  },
};
// MuiButton-root;
