import s from './ContactsPage.module.css';
import { useEffect, useRef } from 'react';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Spinner from '../../components/Spinner/Spinner';
import { contactsStore } from 'mobx/store';
import { observer } from 'mobx-react-lite';

const ContactsPage = observer(() => {
  const {
    fetchContacts,
    addContact,
    removeContact,
    onChangeFilter,
    items,
    loading,
    error,
    filter,
    visibleContacts,
  } = contactsStore;
  console.log('error: ', error);
  console.log('items: ', items);
  console.log('visibleContacts: ', visibleContacts);

  const firstRender = useRef(true);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('my-contacts'));
    if (items && items.length) {
      setContacts(items);
    }
  }, []);

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
      return;
    }
    firstRender.current = false;
  }, [contacts]);

  // useEffect(() => {
  //   fetchContacts();
  //   console.log('запрос фетч контактс');
  // }, []);

  // const onChangeFilter = e => {
  //   dispatch(filterChange(e.target.value));
  // };
  // const { items, loading, error, filter } = contacts;

  // const getVisibleContacts = () => {
  //   const normalizedFilterValue = items.toLowerCase().trim();
  //   console.log('normalizedFilterValue: ', normalizedFilterValue);
  //   const visibleContacts = items.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilterValue)
  //   );
  //   console.log('visibleContacts: ', visibleContacts);
  //   return visibleContacts;
  // };
  return (
    <main>
      <div className={s.container}>
        <Section title="Phonebook">
          <ContactForm onSubmitClick={addContact} />
        </Section>
        <Section title="Contacts">
          {loading && <Spinner />}
          {items.length > 0 ? (
            <>
              <Filter
                valueFromFilter={filter}
                catchFilterInfo={onChangeFilter}
              />
              <ContactList
                contacts={visibleContacts}
                removeContact={removeContact}
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
});

export default ContactsPage;
