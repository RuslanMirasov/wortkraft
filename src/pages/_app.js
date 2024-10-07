import useSWR from 'swr';
import fetcher from '../utils/fatcher';
import { Layout } from '@/components';
import { PopupProvider } from '../hooks/usePopup';
import { AuthProvider } from '../hooks/useAuth';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  const { data: books, error, isLoading: booksLoading } = useSWR('/api/books', fetcher);

  return (
    <AuthProvider>
      <PopupProvider>
        <Layout booksLoading={booksLoading} error={error}>
          <Component {...pageProps} books={books} />
        </Layout>
      </PopupProvider>
    </AuthProvider>
  );
}
