export const changeHandlerUtil = ({
  name,
  value,
  setNumber,
  setName,
  setEmail,
}) => {
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;
    case 'email':
      setEmail(value);
      break;
    default:
      break;
  }
};
