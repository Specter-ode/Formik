import s from './ContactsPage.module.css';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Spinner from '../../components/Spinner/Spinner';
import { contactsStore } from 'mobx/store';
import { observer } from 'mobx-react-lite';

const ContactsPage = observer(() => {
  const {
    addContact,
    removeContact,
    onChangeFilter,
    items,
    loading,
    error,
    filter,
    visibleContacts,
  } = contactsStore;
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
