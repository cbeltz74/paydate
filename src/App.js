import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Calculator } from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Calculator />
        <Footer />
      </main>
    </div>
  );
}

export default App;
