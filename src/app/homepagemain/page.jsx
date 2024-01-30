
//main page of home 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homeone from './home/page'


import RootLayout from './layout';

export default function Home() {
  return (
    <>
    <RootLayout authPage={true}>
      <ToastContainer />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Homeone/>
      <h2>home page</h2>  
      </main>
      </RootLayout>
    </>
  );
}