import './App.css'
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Verticals from './components/Verticals/Verticals';
import WhyUs from './components/WhyUs/WhyUs';

function App() {
  return (
    <>
   <Header/>
   <main>
    <Intro/>
    <WhyUs/>
    <Verticals/>
   </main>
   </>
  )
}

export default App
