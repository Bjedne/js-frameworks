import { Header } from './header.jsx';
import { Footer } from './footer.jsx';

export function Layout({ children }) {
  return (
    <div id="root">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}