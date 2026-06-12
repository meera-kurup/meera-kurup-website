import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Newsletter from './components/Newsletter'
import NewsletterIssue from './pages/NewsletterIssue'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/newsletter/:slug" element={<NewsletterIssue />} />
      </Routes>
    </>
  )
}
