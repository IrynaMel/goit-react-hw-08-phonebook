import ContactForm from 'components/Form/ContactsForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const ContactsView = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const visible = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <>
      <h2>PhoneBook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      <ContactList data={data} isLoading={isLoading} visible={visible} />
    </>
  );
};
export default ContactsView;
