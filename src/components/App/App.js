import "./App.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Works from "../Works/Works";
import Three from "../Three/Three";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="root">
      <div className="page">
        <header>
          <Header></Header>
        </header>
        <main>
          <Promo></Promo>
          <Works></Works>
          <Three></Three>
          <Reviews></Reviews>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
