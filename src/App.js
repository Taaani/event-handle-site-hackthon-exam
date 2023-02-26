// import logo from './logo.svg';
import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CostomRouter from './Pages/Router';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>

        <CostomRouter />

      </AuthContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
