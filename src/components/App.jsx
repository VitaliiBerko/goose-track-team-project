import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout';
import { RestrictedRoute } from './AuthRouts/RestrictedRoute';
import { PrivateRoute } from './AuthRouts/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChoosedDay/ChoosedDay';
import { Loader, LoaderPrivatePage } from './Loader/Loader';
const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="" element={<RestrictedRoute />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <StartPage />
                </Suspense>
              }
            />
            <Route
              path="login"
              element={
                <Suspense fallback={<Loader />}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<Loader />}>
                  <RegisterPage />
                </Suspense>
              }
            />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="" element={<MainLayout />}>
              <Route
                path="calendar"
                element={
                  <Suspense fallback={<LoaderPrivatePage />}>
                    <CalendarPage />
                  </Suspense>
                }
              >
                <Route path="month/:currentDate" element={<ChoosedMonth />} />
                <Route path="day/:currentDay" element={<ChoosedDay />} />
              </Route>
              <Route
                path="account"
                element={
                  <Suspense fallback={<LoaderPrivatePage />}>
                    <AccountPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};
