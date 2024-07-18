import Navbar from '../../components/navbar';
import ImageGallery from './components/imgGallery';
import Footer from '../../components/footer';

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col">
    <Navbar className="fixed top-0 left-0 right-0 z-10" />
    <main className="flex-grow overflow-hidden">
      <ImageGallery />
    </main>
    <Footer className="fixed bottom-0 left-0 right-0 z-10" />
  </div>
  );
};

export default LandingPage;