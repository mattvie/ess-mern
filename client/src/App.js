import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './Pages/Layout';
import MainPage from './Pages/MainPage';
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import AllBooksPage from "./Pages/AllBooksPage";
import BookPage from "./Pages/BookPage"
import WritePage from "./Pages/WritePage";
import UpdatePage from "./Pages/UpdatePage";
import DeletePage from "./Pages/DeletePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="books" element={<AllBooksPage />} />
        <Route path="books/:id" element={<BookPage />} />
        <Route path="write" element={<WritePage />} />
        <Route path="update" element={<UpdatePage />} />
        <Route path="delete" element={<DeletePage />} />

      </Route>

    </Routes>
  );
}

export default App;
