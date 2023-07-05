const { REACT_APP_BACKEND_URL } = process.env;

export const isGravatar = avatarURL => {
  if (avatarURL?.slice(0, 2) === '//') {
    return `https:${avatarURL}?d=wavatar`;
  }
  return `${REACT_APP_BACKEND_URL}/${avatarURL}`;
};
