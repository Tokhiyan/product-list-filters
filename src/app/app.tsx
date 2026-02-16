import { BrowserRouter } from 'react-router-dom';

import Routes from '@/app/routes';

import { QueryProvider } from '@/app/providers/queryProvider.tsx';

import './app.scss';

export default function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryProvider>
  );
}
