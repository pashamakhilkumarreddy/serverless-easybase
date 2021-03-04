import { EasybaseProvider } from 'easybase-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ebconfig from './ebconfig';
import Notes from './components/Notes';

const App = () => {
  return [
    <Header />,
    <main className='container mt-4'>
      <EasybaseProvider ebconfig={ebconfig}>
        <Notes />
      </EasybaseProvider>
    </main>,
    <Footer />,
  ];
};

export default App;
