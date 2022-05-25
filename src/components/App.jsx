import { nanoid } from 'nanoid';
// import FormByFormik from './Formik';
import Form from './Form/Form';
import ContactList from './ContactList';
import Filter from './Filter';
import AppBar from '../components/AppBar/AppBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../redux/contacts/itemSlice';

// export default function App() {
//   return <FormByFormik />;
// }
// кастомный хук для localStorage
// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };

export default function App() {
  // используя isMounted проверяем замаунтился ли компонент и рендерим тоБ что localeStorage
  // const isMounted = useRef(false);
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // ленивая инециализация компонентов которая выполняется один раз
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });
  // const [contacts, setContacts] = useLocalStorage('contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.item);
  const value = useSelector(state => state.contacts.filter);
  console.log(value);
  const addContacts = (name, number) => {
    const newName = checkName(name);
    const formNumber = numberFormatting(number);
    const contact = {
      id: nanoid(),
      name,
      number: formNumber,
    };

    if (newName) {
      return toast.error(`${name} is already in contacts`);
    }
    dispatch(addItem(contact));

    toast.success(`${name} was added to contacts!`);
  };

  const deleteContact = id => {
    dispatch(deleteItem(id));
  };

  // const onChange = e => {
  //   console.log(e.currentTarget.value);
  // };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };
  // const getVisibleContact = () => {
  //   const normalizeContact = value.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeContact)
  //   );
  // };
  const visibleContacts = getVisibleContacts();
  const checkName = name => {
    const normalyzeName = name.toLocaleLowerCase();
    return contacts.find(
      ({ name }) => name.toLocaleLowerCase() === normalyzeName
    );
  };

  const numberFormatting = number => {
    const array = [...number];
    for (let i = 3; i < array.length - 1; i += 3) {
      array.splice(i, 0, '-');
    }
    return array.join('');
  };

  return (
    <div>
      <AppBar>
        <Form onSubmit={addContacts} />
      </AppBar>
      <Filter />
      {/* <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} /> */}
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      <ToastContainer />
      {/* <span> Общее кол-во: {contacts.length}</span> */}
    </div>
  );
}
