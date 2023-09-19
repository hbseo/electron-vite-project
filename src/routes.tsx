import { MainPage, VacationPage, CalendarPage, SettingPage } from '@/pages';

export const routes = [
  {
    path: '/',
    element: MainPage
  },
  {
    path: '/vacation',
    element: VacationPage
  },
  {
    path: '/calendar',
    element: CalendarPage
  },
  {
    path: '/setting',
    element: SettingPage
  }
];
