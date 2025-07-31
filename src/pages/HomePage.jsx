
// pages/HomePage.jsx
import MarketingHero from '../components/marketing-hero.jsx'
import Seolandinglocal from '../components/seo-landing-local.jsx'
import Guaranted from '../components/guaranted_ranking.jsx'
import FullServiceSEO from '../components/full_service_seo.jsx'
import BusinessProfileRanking from '../components/businees_profile_ranking.jsx'
import MissionRankOne from '../components/mission_rank_one.jsx'
import IPhone16ProSection from '../components/iphone16_pro_section.jsx'
import GuaranteedResults from '../components/GuaranteedResults.jsx'
import LogoSlider from '../components/logos_slide.jsx'
import Testimonial from '../components/testinomials.jsx'
import WhoWeAre from '../components/who_are_we.jsx'
import BrowsePlans from '../components/browse_plan.jsx'
import Enterprise from '../components/enterprise.jsx'
import FAQ from '../components/faq.jsx'
import Footer from '../components/footer.jsx'
import PromotionalBanner from '../components/promotional_banner.jsx'

export default function HomePage() {
  return (
    <>
    <section id="seo">
      <MarketingHero />
      </section>

      <section id="services">
        <Seolandinglocal />
      </section>

      <Guaranted />
      <section id="portfolio">
      <FullServiceSEO />
      </section>
      <BusinessProfileRanking />
      <MissionRankOne />
      <IPhone16ProSection />


      <GuaranteedResults />

      <LogoSlider />
      <Testimonial />
      <section id="seoteam">
      <WhoWeAre />
      </section>

      <section id="pricing">
        <BrowsePlans />
      </section>

      <Enterprise />
      <FAQ />
      <PromotionalBanner />
      <Footer />
    </>
  )
}




// import { lazy, Suspense } from 'react';
// import MarketingHero from '../components/marketing-hero.jsx'; // Critical (load immediately)

// // Lazy load non-critical components
// const Seolandinglocal = lazy(() => import('../components/seo-landing-local.jsx'));
// const Guaranted = lazy(() => import('../components/guaranted_ranking.jsx'));
// const FullServiceSEO = lazy(() => import('../components/full_service_seo.jsx'));
// const BusinessProfileRanking = lazy(() => import('../components/businees_profile_ranking.jsx'));
// const MissionRankOne = lazy(() => import('../components/mission_rank_one.jsx'));
// const IPhone16ProSection = lazy(() => import('../components/iphone16_pro_section.jsx'));
// const GuaranteedResults = lazy(() => import('../components/GuaranteedResults.jsx'));
// const LogoSlider = lazy(() => import('../components/logos_slide.jsx'));
// const Testimonial = lazy(() => import('../components/testinomials.jsx'));
// const WhoWeAre = lazy(() => import('../components/who_are_we.jsx'));
// const BrowsePlans = lazy(() => import('../components/browse_plan.jsx'));
// const Enterprise = lazy(() => import('../components/enterprise.jsx'));
// const FAQ = lazy(() => import('../components/faq.jsx'));
// const Footer = lazy(() => import('../components/footer.jsx'));
// const PromotionalBanner = lazy(() => import('../components/promotional_banner.jsx'));

// export default function HomePage() {
//   return (
//     <>
//       {/* Above-the-fold (critical, loads instantly) */}
//       <section id="seo">
//         <MarketingHero />
//       </section>

//       {/* Below-the-fold (lazy-loaded with Suspense) */}
//       <Suspense fallback={<LoadingPlaceholder />}>
//         <section id="services">
//           <Seolandinglocal />
//         </section>
//         <Guaranted />
//         <section id="portfolio">
//           <FullServiceSEO />
//         </section>
//         <BusinessProfileRanking />
//         <MissionRankOne />
//         <IPhone16ProSection />
//         <GuaranteedResults />
//         <LogoSlider />
//         <Testimonial />
//         <section id="seoteam">
//           <WhoWeAre />
//         </section>
//         <section id="pricing">
//           <BrowsePlans />
//         </section>
//         <Enterprise />
//         <FAQ />
//         <PromotionalBanner />
//         <Footer />
//       </Suspense>
//     </>
//   );
// }

// // Simple loading placeholder (prevents layout shift)
// function LoadingPlaceholder() {
//   return (
//     <div className="flex justify-center items-center min-h-[50vh]">
//       <div className="animate-pulse">Loading...</div>
//     </div>
//   );
// }


// import { lazy, Suspense, useState, useEffect } from 'react';

// // Critical above-the-fold component (load immediately)
// import MarketingHero from '../components/marketing-hero.jsx';
// import Seolandinglocal from '../components/seo-landing-local.jsx';

// // Lazy-loaded components with explicit chunk names for better debugging
// // const Seolandinglocal = lazy(() => import(/* webpackChunkName: "services" */ '../components/seo-landing-local.jsx'));
// const Guaranted = lazy(() => import(/* webpackChunkName: "guarantee" */ '../components/guaranted_ranking.jsx'));
// const FullServiceSEO = lazy(() => import(/* webpackChunkName: "portfolio" */ '../components/full_service_seo.jsx'));
// const BusinessProfileRanking = lazy(() => import(/* webpackChunkName: "business" */ '../components/businees_profile_ranking.jsx'));
// const MissionRankOne = lazy(() => import(/* webpackChunkName: "mission" */ '../components/mission_rank_one.jsx'));
// const IPhone16ProSection = lazy(() => import(/* webpackChunkName: "iphone" */ '../components/iphone16_pro_section.jsx'));
// const GuaranteedResults = lazy(() => import(/* webpackChunkName: "results" */ '../components/GuaranteedResults.jsx'));
// const LogoSlider = lazy(() => import(/* webpackChunkName: "logos" */ '../components/logos_slide.jsx'));
// const Testimonial = lazy(() => import(/* webpackChunkName: "testimonials" */ '../components/testinomials.jsx'));
// const WhoWeAre = lazy(() => import(/* webpackChunkName: "team" */ '../components/who_are_we.jsx'));
// const BrowsePlans = lazy(() => import(/* webpackChunkName: "pricing" */ '../components/browse_plan.jsx'));
// const Enterprise = lazy(() => import(/* webpackChunkName: "enterprise" */ '../components/enterprise.jsx'));
// const FAQ = lazy(() => import(/* webpackChunkName: "faq" */ '../components/faq.jsx'));
// const Footer = lazy(() => import(/* webpackChunkName: "footer" */ '../components/footer.jsx'));
// const PromotionalBanner = lazy(() => import(/* webpackChunkName: "banner" */ '../components/promotional_banner.jsx'));

// export default function HomePage() {
//   const [prefetched, setPrefetched] = useState({});

//   // Preload critical components on mount
//   useEffect(() => {
//     import('../components/seo-landing-local.jsx');
//     import('../components/guaranted_ranking.jsx');
//   }, []);

//   const handlePrefetch = (component) => {
//     if (!prefetched[component]) {
//       switch(component) {
//         case 'services':
//           import('../components/seo-landing-local.jsx');
//           break;
//         case 'portfolio':
//           import('../components/full_service_seo.jsx');
//           break;
//         case 'seoteam':
//           import('../components/who_are_we.jsx');
//           break;
//         case 'pricing':
//           import('../components/browse_plan.jsx');
//           break;
//       }
//       setPrefetched(prev => ({ ...prev, [component]: true }));
//     }
//   };

//   return (
//     <>
//       {/* Critical content - loaded immediately */}
//       <section id="seo" className="critical-section">
//         <MarketingHero fetchpriority="high" />
//       </section>

//         <section 
//           id="services" 
//           // className="interactive-section"
//           onMouseEnter={() => handlePrefetch('services')}
//           onFocus={() => handlePrefetch('services')}
//         >
//           <Seolandinglocal />
//         </section>

//       {/* Main content with multiple suspense boundaries */}
//       <Suspense fallback={<LoadingPlaceholder />}>
//         {/* First content section with preloading */}


//         <Guaranted />

//         {/* Portfolio section with preloading */}
//         <section 
//           id="portfolio"
//           className="interactive-section"
//           onMouseEnter={() => handlePrefetch('portfolio')}
//           onFocus={() => handlePrefetch('portfolio')}
//         >
//           <FullServiceSEO />
//         </section>

//         {/* Non-critical sections */}
//         <BusinessProfileRanking />
//         <MissionRankOne />
//         <IPhone16ProSection />
//         <GuaranteedResults />
//         <LogoSlider />
//         <Testimonial />

//         {/* Team section with preloading */}
//         <section 
//           id="seoteam"
//           className="interactive-section"
//           onMouseEnter={() => handlePrefetch('seoteam')}
//           onFocus={() => handlePrefetch('seoteam')}
//         >
//           <WhoWeAre />
//         </section>

//         {/* Pricing section with preloading */}
//         <section 
//           id="pricing"
//           className="interactive-section"
//           onMouseEnter={() => handlePrefetch('pricing')}
//           onFocus={() => handlePrefetch('pricing')}
//         >
//           <BrowsePlans />
//         </section>

//         {/* Footer sections */}
//         <Enterprise />
//         <FAQ />
//         <PromotionalBanner />
//         <Footer />
//       </Suspense>
//     </>
//   );
// }

// // Improved loading placeholder with better accessibility
// function LoadingPlaceholder() {
//   return (
//     <div 
//       className="flex justify-center items-center min-h-[50vh]"
//       role="status"
//       aria-live="polite"
//       aria-label="Loading content"
//     >
//       <div className="animate-pulse flex space-x-4 w-full max-w-md">
//         <div className="rounded-full bg-gray-200 h-12 w-12 dark:bg-gray-700"></div>
//         <div className="flex-1 space-y-4 py-1">
//           <div className="h-4 bg-gray-200 rounded w-3/4 dark:bg-gray-700"></div>
//           <div className="space-y-2">
//             <div className="h-4 bg-gray-200 rounded dark:bg-gray-700"></div>
//             <div className="h-4 bg-gray-200 rounded w-5/6 dark:bg-gray-700"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }