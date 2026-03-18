
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingContacts } from './FloatingContacts';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
   
      </main>
      <Footer />
      <FloatingContacts />
    </div>
  );
}
