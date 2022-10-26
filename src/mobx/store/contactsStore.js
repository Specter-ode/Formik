import * as api from '../../services/api/contacts';
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
  setFilter = value => {
    this.filter = value;
  };
  setError = error => {
    this.error = error;
  };
  setLoading = bool => {
    this.loading = bool;
  };
  get visibleContacts() {
    const normalizedFilterValue = this.filter.toLowerCase().trim();
    console.log('normalizedFilterValue: ', normalizedFilterValue);
    const visibleContacts = this.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
    console.log('visibleContacts: ', visibleContacts);
    return visibleContacts;
  }
  onChangeFilter = e => {
    this.filter = e.target.value;
  };
  fetchContacts = async () => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.getContacts();
      console.log('result: ', result);
      this.items = result;
    } catch (error) {
      toast.error(`Sorry, request failed. We can't load your contacts.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  addContact = async data => {
    const isDublicate = this.items.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDublicate) {
      toast.error(`${data.name} is already in contacts`, {
        theme: 'colored',
      });
      return
    }
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.addNewContact(data);
      this.items.push(result);
    } catch (error) {
      toast.error(`Sorry, request failed. Try again`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  removeContact = async id => {
    try {
      this.setError(null);
      this.setLoading(true);
      await api.deleteContact(id);
      this.items = this.items.filter(item => item.id !== id);
    } catch (error) {
      toast.error(
        `Sorry, request failed.Contact has not been deleted. May be you have problems with network`
      );
      this.setError(null);
    } finally {
      this.setLoading(false);
    }
  };
}

export default new ContactsStore();
