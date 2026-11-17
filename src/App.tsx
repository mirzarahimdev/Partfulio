import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { LanguageProvider } from './i18n/LanguageContext'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-svh bg-bg text-text">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
