// import FormByFormik from './Formik';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import PhoneBookPage from '../pages/PhoneBookPage';
import SecondPage from '../pages/SecondPage';
import NotFoundPage from '../pages/NotFoundPage';

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
  // const contacts = useSelector(state => state.contacts.item);
  // const value = useSelector(state => state.contacts.filter);
  // console.log(contacts);

  // const addContacts = (name, number) => {
  //   const newName = checkName(name);
  //   const formNumber = numberFormatting(number);
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number: formNumber,
  //   };

  //   if (newName) {
  //     return toast.error(`${name} is already in contacts`);
  //   }
  //   dispatch(addItem(contact));

  //   toast.success(`${name} was added to contacts!`);
  // };

  // const deleteContact = id => {
  //   dispatch(deleteItem(id));
  // };

  // const getVisibleContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(value.toLowerCase())
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  // const checkName = name => {
  //   const normalyzeName = name.toLocaleLowerCase();
  //   return contacts.find(
  //     ({ name }) => name.toLocaleLowerCase() === normalyzeName
  //   );
  // };

  // const numberFormatting = number => {
  //   const array = [...number];
  //   for (let i = 3; i < array.length - 1; i += 3) {
  //     array.splice(i, 0, '-');
  //   }
  //   return array.join('');
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PhoneBookPage />} />
          <Route path="nextpage" element={<SecondPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
