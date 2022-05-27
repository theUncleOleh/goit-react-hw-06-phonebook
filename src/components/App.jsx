import { Routes, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import PhoneBookPage from '../pages/PhoneBookPage';
import SecondPage from '../pages/SecondPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function App() {
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
