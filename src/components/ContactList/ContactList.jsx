import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getAllContacts } from 'redux/contactsOperation';
import { getContacts, filterContact } from 'redux/selectors';

export const ContactList = () => {
  // const store = useSelector(store => store);
  const filters = useSelector(filterContact);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizeFilter = filters.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };
  return (
    <>
      {isLoading && <p>LOADING...</p>}
      <ul>
        {visibleContacts.map(contact => {
          return (
            <li key={contact.id} id={contact.id}>
              {`${contact.name}: ${contact.number}`}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
