
// // pages/HomePage.jsx
// import MarketingHero from '../components/marketing-hero.jsx'
// import Seolandinglocal from '../components/seo-landing-local.jsx'
// import Guaranted from '../components/guaranted_ranking.jsx'
// import FullServiceSEO from '../components/full_service_seo.jsx'
// import BusinessProfileRanking from '../components/businees_profile_ranking.jsx'
// import MissionRankOne from '../components/mission_rank_one.jsx'
// import IPhone16ProSection from '../components/iphone16_pro_section.jsx'
// import GuaranteedResults from '../components/GuaranteedResults.jsx'
// import LogoSlider from '../components/logos_slide.jsx'
// import Testimonial from '../components/testinomials.jsx'
// import WhoWeAre from '../components/who_are_we.jsx'
// import BrowsePlans from '../components/browse_plan.jsx'
// import Enterprise from '../components/enterprise.jsx'
// import FAQ from '../components/faq.jsx'
// import Footer from '../components/footer.jsx'
// import PromotionalBanner from '../components/promotional_banner.jsx'

// export default function HomePage() {
//   return (
//     <>
//     <section id="seo">
//       <MarketingHero />
//       </section>

//       <section id="services">
//         <Seolandinglocal />
//       </section>

//       <Guaranted />
//       <section id="portfolio">
//       <FullServiceSEO />
//       </section>
//       <BusinessProfileRanking />
//       <MissionRankOne />
//       <IPhone16ProSection />


//       <GuaranteedResults />

//       <LogoSlider />
//       <Testimonial />
//       <section id="seoteam">
//       <WhoWeAre />
//       </section>

//       <section id="pricing">
//         <BrowsePlans />
//       </section>

//       <Enterprise />
//       <FAQ />
//       <PromotionalBanner />
//       <Footer />
//     </>
//   )
// }




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


import { lazy, Suspense, useState } from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from '../components/ErrorBoundary.jsx';

// Critical above-the-fold component (load immediately)
import MarketingHero from '../components/marketing-hero.jsx';

// Lazy-loaded components
const Seolandinglocal = lazy(() => import('../components/seo-landing-local.jsx'));
const Guaranted = lazy(() => import('../components/guaranted_ranking.jsx'));
const FullServiceSEO = lazy(() => import('../components/full_service_seo.jsx'));
const BusinessProfileRanking = lazy(() => import('../components/businees_profile_ranking.jsx'));
const MissionRankOne = lazy(() => import('../components/mission_rank_one.jsx'));
const IPhone16ProSection = lazy(() => import('../components/iphone16_pro_section.jsx'));
const GuaranteedResults = lazy(() => import('../components/GuaranteedResults.jsx'));
const LogoSlider = lazy(() => import('../components/logos_slide.jsx'));
const Testimonial = lazy(() => import('../components/testinomials.jsx'));
const WhoWeAre = lazy(() => import('../components/who_are_we.jsx'));
const BrowsePlans = lazy(() => import('../components/browse_plan.jsx'));
const Enterprise = lazy(() => import('../components/enterprise.jsx'));
const FAQ = lazy(() => import('../components/faq.jsx'));
const Footer = lazy(() => import('../components/footer.jsx'));
const PromotionalBanner = lazy(() => import('../components/promotional_banner.jsx'));

// Prefetch configuration
const prefetchComponents = {
  services: () => import('../components/seo-landing-local.jsx'),
  portfolio: () => import('../components/full_service_seo.jsx'),
  seoteam: () => import('../components/who_are_we.jsx'),
  pricing: () => import('../components/browse_plan.jsx')
};

export default function HomePage() {
  const [prefetched, setPrefetched] = useState({});

  const handlePrefetch = (component) => {
    if (!prefetched[component]) {
      prefetchComponents[component]();
      setPrefetched(prev => ({ ...prev, [component]: true }));
    }
  };

  return (
    <>

      {/* Critical content */}
      <section id="seo">
        <MarketingHero fetchpriority="high" />
      </section>

      {/* Lazy-loaded content */}
      <ErrorBoundary fallback={<div className="p-4 text-red-500">Failed to load content</div>}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <section 
            id="services" 
            onMouseEnter={() => handlePrefetch('services')}
          >
            <Seolandinglocal />
          </section>

          <Guaranted />

          <section 
            id="portfolio"
            onMouseEnter={() => handlePrefetch('portfolio')}
          >
            <FullServiceSEO />
          </section>

          <BusinessProfileRanking />
          <MissionRankOne />
          <IPhone16ProSection />
          <GuaranteedResults />
          <LogoSlider />
          <Testimonial />

          <section 
            id="seoteam"
            onMouseEnter={() => handlePrefetch('seoteam')}
          >
            <WhoWeAre />
          </section>

          <section 
            id="pricing"
            onMouseEnter={() => handlePrefetch('pricing')}
          >
            <BrowsePlans />
          </section>

          <Enterprise />
          <FAQ />
          <PromotionalBanner />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

// Loading component
function LoadingPlaceholder() {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-200 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}