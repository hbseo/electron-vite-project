import { MainPage, VacationPage, CalendarPage, MenuPage } from '@/pages';

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
    path: '/menu',
    element: MenuPage
  }
];
