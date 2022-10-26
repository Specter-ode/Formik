import s from './ContactsPage.module.css';
import { useEffect } from 'react';
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

  useEffect(() => {
    fetchContacts();
    console.log('запрос фетч контактс');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
