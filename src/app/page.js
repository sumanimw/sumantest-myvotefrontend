// import 'react-toastify/dist/ReactToastify.css';
// export default function Home() {
//   return ( 
//     <main className="flex min-h-screen flex-col items-center justify-start p-24">
//       <img src="/logo.png" alt="Logo" className="mb-4 h-24 w-24" />
//       <h2 className="mt-2 font-bold text-lg">Home page is coming soon</h2>  
//     </main>
//   );
// }

//main page of home 
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Homeone from '../components/home'


// import RootLayout from './layout';

// export default function Home() {
//   return (
//     <>
//     <RootLayout authPage={true}>
//       <ToastContainer />
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <Homeone/>
//       <h2>home page</h2>  
//       </main>
//       </RootLayout>
//     </>
//   );
// }

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homeone from '../components/home'


import RootLayout from './layout';
import Banner from '@/components/banner';

// export default function Home() {
//   return (
//     <>
//       <RootLayout authPage={true}>
//         <ToastContainer />
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//           <Banner></Banner>
//           <Homeone />
//           <h2>home page</h2>
//         </main>
//       </RootLayout>
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <ToastContainer />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <Banner></Banner> */}
        <Homeone />
        <h2>home page</h2>
      </main>
    </>
  );
}


