// pages/_app.js

import '../styles/globals.css';

import { AuthProvider } from '../contexts/AuthContext'; // Optional: if using a context for authentication

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider> {/* Optional: Wrap your app with AuthProvider */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
