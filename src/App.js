import './App.css';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="bg-[#282c33]">
      <Hello />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
