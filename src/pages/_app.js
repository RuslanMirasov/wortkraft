import { Layout } from '@/components';
import { PopupProvider } from '../hooks/usePopup';
import { AuthProvider } from '../hooks/useAuth';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PopupProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PopupProvider>
    </AuthProvider>
  );
}
