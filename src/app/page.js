import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homeone from '../components/home'

export default function Home() {
  return (
    <>
      <ToastContainer />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Homeone />
      </main>
    </>
  );
}


