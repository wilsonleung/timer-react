import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Timer from './pages/timer';
import Skeleton from './components/skeleton';

const Settings = React.lazy(() => import('./pages/settings'));

const Dummy = () => (
  <div className="h-full flex flex-col gap-8 mt-6">
    <Skeleton></Skeleton>
    <Skeleton></Skeleton>
    <Skeleton></Skeleton>
    <Skeleton width="3/4"></Skeleton>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Timer />} />
          <Route path="timer" element={<Timer />} />
          <Route
            path="settings"
            element={
              <React.Suspense fallback={<Dummy />}>
                <Settings />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
