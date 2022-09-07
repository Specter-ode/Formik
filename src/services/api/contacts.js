import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const addNewContact = async newData => {
  const { data } = await instance.post('/contacts', newData);
  return data;
};

export const updateContact = async (id, newData) => {
  const { data } = await instance.patch(`/contacts/${id}`, newData);
  return data;
};
