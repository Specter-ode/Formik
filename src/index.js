import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { configure } from 'mobx';
import '/node_modules/modern-normalize/modern-normalize.css';
import './index.css';

setTimeout(() =>
  configure({
    enforceActions: 'never',
    reactionScheduler: f => setTimeout(f),
  })
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/Formik/">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
