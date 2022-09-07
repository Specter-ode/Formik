import s from './ContactsPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  removeContact,
  addContact,
} from '../../redux/contacts/contacts-operations';
import { filterChange } from '../../redux/contacts/contacts-slice';
import {
  getContacts,
  getFilterValue,
} from '../../redux/contacts/contacts-selectors';

import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Spinner from '../../components/Spinner/Spinner';

const ContactsPage = () => {
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = newContactData => {
    dispatch(addContact(newContactData));
  };

  const onRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const onChangeFilter = e => {
    dispatch(filterChange(e.target.value));
  };
  const { items, loading, error, filter } = contacts;

  const getVisibleContacts = () => {
    const normalizedFilterValue = filter.toLowerCase().trim();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };
  return (
    <main>
      <div className={s.container}>
        <Section title="Phonebook">
          <ContactForm onSubmitClick={onAddContact} />
        </Section>
        <Section title="Contacts">
          {loading && <Spinner />}
          {items.length > 0 ? (
            <>
              <Filter
                valueFromFilter={filterValue}
                catchFilterInfo={onChangeFilter}
              />
              <ContactList
                contacts={getVisibleContacts()}
                removeContact={onRemoveContact}
              />
            </>
          ) : (
            <p>No contacts in phonebook</p>
          )}
          {error && <p>{error.message}</p>}
        </Section>
      </div>
    </main>
  );
};

export default ContactsPage;
