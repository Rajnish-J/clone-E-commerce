import './App.css';
import Navbar from './components/navbar/navbar'
import Marqu from './components/marquee/marquee.jsx'
import Offer_card from './components/offer_card/offer_card.jsx'
import Week from './components/week_highlights/week.jsx'
import Popular from './components/popular/popular.jsx'
import Brand from './components/brands/brand.jsx'
import Summer from './components/summer_coll/summer.jsx'
import Footer from './components/footer/footer.jsx'

function App() {
  return (

  <>
    <Navbar />
    <Marqu/>
    <Offer_card />
    <Week/>
    <Popular/>
    <Brand/>
    <Summer/>
    <Footer/>
  </>
    

  );
}

export default App;