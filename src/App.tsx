import './App.css'
import Home from './pages/Home'
import Layout from './components/layout/Layout'
import { BookStoreThemeProvider } from './context/themeContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/common/Error'
import * as Pages from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <Error />
  },
  {
    path: '/signup',
    element: <Layout><Pages.Signup /></Layout>
  },
  {
    path: '/reset',
    element: <Layout><Pages.ResetPassword /></Layout>
  },
  {
    path: '/signin',
    element: <Layout><Pages.Signin /></Layout>
  },
  {
    path: '/books',
    element: <Layout><Pages.Books /></Layout>
  },
  {
    path: '/books/:bookId',
    element: <Layout><Pages.BookDetail /></Layout>
  },
])

function App() {

  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  )
}

export default App
