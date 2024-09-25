import { Layout } from '@/components';
import { PopupProvider } from '../hooks/usePopup';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <PopupProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PopupProvider>
  );
}
