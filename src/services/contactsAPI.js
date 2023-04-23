import axios from 'axios';

axios.defaults.baseURL = 'https://64456476914c816083cdc3ae.mockapi.io/';

export async function getContacts() {
  const data = await axios.get('contacts');
  console.log('🚀 ~ data:', data);
  return data;
}

export async function addContactss(name, phone) {
  const { data } = await axios.post('contacts', { name, phone });
  console.log('🚀 ~ data:', data);

  return data;
}

export function deleteContact(id) {
  axios.delete(`contacts/${id}`);
}
