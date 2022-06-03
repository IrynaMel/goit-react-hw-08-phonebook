// import PropTypes from 'prop-types';
import { Li, Ul, P } from './ContactList.styled';
import Button from 'components/Button/Button';
// import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { useEffect } from 'react';

const ContactList = () => {
  const { data, isLoading, refetch } = useGetContactsQuery();

  useEffect(() => refetch(), [refetch]);

  const filter = useSelector(state => state.filter);

  const visible = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {isLoading && <ClipLoader />}
      {data && (
        <Ul>
          {visible.map(({ id, name, number }) => (
            <Li key={id}>
              <P>{name}:</P> <p>{number}</p>
              <Button id={id} />
            </Li>
          ))}
        </Ul>
      )}
      {visible?.length === 0 && <p>no contacts</p>}
    </div>
  );
};

// ContactList.propTypes = {
//   visible: PropTypes.array,
// };

export default ContactList;
