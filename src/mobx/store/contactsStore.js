import * as api from '../../services/api/auth';
import { toast } from 'react-toastify';
import { makeAutoObservable } from 'mobx';

class ContactsStore {
  items = [];
  loading = false;
  error = null;
  filter = '';

  constructor() {
    makeAutoObservable(
      this
      //   { deep: true }
    );
  }
  //   setItems = newContact => {};
  setFilter = value => {
    this.filter = value;
  };
  setError = error => {
    this.error = error;
  };
  setLoading = bool => {
    this.loading = bool;
  };

  fetchContacts = async () => {};
  addContact = async data => {
    const isDublicate = this.items.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDublicate) {
      toast.error(`${data.name} is already in contacts`, {
        theme: 'colored',
      });
      return false;
    }
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.addNewContact(data);
      this.items.push(data);
      this.setLoading(false);
      return result;
    } catch (error) {
      toast.error(`Sorry, request failed. Try again`);
      this.setError(error);
      this.setLoading(false);
      return error;
    }
  };
  removeContact = async id => {
    try {
      this.setError(null);
      this.setLoading(true);
      await api.deleteContact(id);
      this.items = this.items.filter(item => item.id !== id);
      this.setLoading(false);
      return id;
    } catch (error) {
      toast.error(
        `Sorry, request failed.Contact has not been deleted. May be you have problems with network`
      );
      this.setError(null);
      this.setLoading(false);
      return error;
    }
  };
}

export default new ContactsStore();
