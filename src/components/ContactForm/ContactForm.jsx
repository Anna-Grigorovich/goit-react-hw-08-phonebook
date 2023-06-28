import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { getAllContacts } from 'redux/store';
import { nanoid } from 'nanoid';
// import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperation';

export const ContactForm = () => {
  const [state, setState] = useState({ name: '', number: '' });
const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleForm = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget;
    const nameArray = contacts.map(contact => contact.name.toLowerCase());
    if (!nameArray.includes(name.value.toLowerCase())) {
      const arrayCont = {
        id: nanoid(),
        name: name.value,
        phone: number.value,
      };
      dispatch(addContact(arrayCont));
      reset();
    } else {
      alert('Такой контакт есть, придумай другой');
    }
  };
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const reset = () => {
    setState({ name: '', number: '' });
  };
  return (
    <form type="submit" onSubmit={handleForm} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={state.name}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={state.number}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
