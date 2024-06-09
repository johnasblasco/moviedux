import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
function App() {
  return (
    <div className="App">
      <div className='container'>
            <Header />

            <MoviesGrid />
            <MoviesGrid />

            <Footer />
      </div>
      



    </div>
  );
}

export default App;
