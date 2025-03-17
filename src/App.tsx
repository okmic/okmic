import { AppWrapper, Loading } from './index.styled'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import Header from './components/AppBar/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from './redux/store'
import { changeAppTheme } from './redux/appReducer'
import OfferPage from './pages/Offer.page'

function App() {
  useEffect(() => {
    const handleAnchorClick = (event: any) => {
      const targetId = event.currentTarget.getAttribute('href')
      if (targetId.startsWith('#')) {
        event.preventDefault()
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  const theme = useSelector((state: stateType) => state.appReducer.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeAppTheme())
  }, [theme, dispatch])

  return (
    <Suspense fallback={<Loading>Loading</Loading>}>
      <BrowserRouter>
        <AppWrapper
          colorText={theme.styles.app.color}
          backgroundColor={theme.styles.app.background}
        >
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/offer" element={<OfferPage />} /> 
            <Route path="/*" element={<Main />} /> 
          </Routes>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    </Suspense>
  )
}

export default App