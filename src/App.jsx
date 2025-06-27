

            import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomePage from '../src/pages/HomePage.jsx'
import ContactPage from '../src/pages/ContactPage.jsx'
import FormSuccess from '../src/pages/Success.jsx'
import TosPage from '../src/pages/tos.jsx'
import PrivacyPolicy from './pages/privacypolicy.jsx'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tos" element={<TosPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/success" element={<FormSuccess />} />
      </Routes>
    </Router>
  )
}

export default App