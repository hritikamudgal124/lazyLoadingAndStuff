import './App.css';
import Cookies from './component/CookiesWithCustomHook';
// import Cookie from './component/Cookies';
// import React, { Suspense,lazy }  from 'react';
// import DebouncedInput from './component/DebouncedInput';
// import LocalStorage from './component/LocalStorage';
// import SessionStorage from './component/SessionStorage';
// const LazyComponent  = lazy(()=>import('./component/lazyComponent'));
function App() {
  return (
    <div>
      {/* <h1>welcome</h1>
      <Suspense fallback={<div>loading</div>}>
      <LazyComponent/>
      </Suspense>
      <DebouncedInput/> */}
      {/* <LocalStorage/> */}
      {/* <SessionStorage/> */}
      {/* <Cookie/> */}
      <Cookies/>
    </div>
);
}
export default App;
