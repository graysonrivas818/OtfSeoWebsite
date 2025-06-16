// import './App.css'
// import Header from './components/Header.jsx'
// import MarketingHero from './components/marketing-hero.jsx'
// import Seolandinglocal from './components/seo-landing-local.jsx'
// import Guaranted from './components/guaranted_ranking.jsx'
// import FullServiceSEO from './components/full_service_seo.jsx'
// import BusinessProfileRanking from './components/businees_profile_ranking.jsx'
// import MissionRankOne from './components/mission_rank_one.jsx'
// import IPhone16ProSection from './components/iphone16_pro_section.jsx'
// import GuaranteedResults from './components/GuaranteedResults.jsx'
// import LogoSlider from './components/logos_slide.jsx'
// import Testimonial from './components/testinomials.jsx'
// import WhoWeAre from './components/who_are_we.jsx'
// import BrowsePlans from './components/browse_plan.jsx'
// import Enterprise from './components/enterprise.jsx'
// import FAQ from './components/faq.jsx'
// import Footer from './components/footer.jsx'
// import PromotionalBanner from './components/promotional_banner.jsx'
// import Contact from './components/contact.jsx'

// function App() {


//   return (
//     <>
//          <Header />
//          <MarketingHero />
//          <Seolandinglocal />
//          <Guaranted/>
//          <FullServiceSEO/>
//          <BusinessProfileRanking/>
//          <MissionRankOne/>
//          <IPhone16ProSection/>
//          <GuaranteedResults/>
//          <LogoSlider/>
//          <Testimonial/>
//          <WhoWeAre/>
//          <BrowsePlans/>
//          <Enterprise/>
//          <FAQ/>
//          <PromotionalBanner/>
//          <Footer/>
//          {/* <Contact/> */}
//     </>

  
//   )
// }

// export default App



            import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomePage from '../src/pages/HomePage.jsx'
import ContactPage from '../src/pages/ContactPage.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App