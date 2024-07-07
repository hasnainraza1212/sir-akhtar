import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from './pages/Home/Home'
import Layout from './pages/Layout/Layout'
import { useEffect, useMemo, useState } from "react"
import Construction from "./pages/Construction/Construction"
import Profile from "./pages/Profile/Profile"
import Protected from "./pages/Protected/Protected"
import ProtectedAdmin from "./pages/ProtectedAdmin/ProtectedAdmin"
import Content from "./pages/Content/Content"
import SinglePlaylist from "./Components/SinglePlaylist/SinglePlaylist"
import CustomVideo from "./Components/CustomVideo/CustomVideo"
import VerifyPhone from "./pages/VerifyPhone/VerifyPhone"
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail"
import Courses from "./pages/Courses/Courses"
import CoursePage from "./pages/CoursePage/CoursePage"

function App() {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth || 0)
  const isLargeScreen = useMemo(() => { return windowWidth < 1200 ? false : true }, [windowWidth])
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {

      if (!pathname.includes("news")) {
        window?.scrollTo(0, 0);
      }
      else if (pathname.includes("news") && !isLargeScreen) {
        window?.scrollTo(0, 0);

      }
    }, [pathname]);

    return null;
  }
  useEffect(() => {
    window.addEventListener("resize", () => { setWindowWidth(window?.innerWidth || 0) })
    return () => {
      window.removeEventListener("resize", () => { setWindowWidth(window?.innerWidth || 0) })
    }
  }, [])
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Protected children={<Profile />} />} />
          <Route path="playlists" element={<Protected children={<Content />} />} />
          <Route path="videos/:id" element={<Protected children={<SinglePlaylist />} />} />
          <Route path="video/:id" element={<Protected children={<CustomVideo />} />} />
          <Route path="verify-phone" element={<VerifyPhone />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<Protected children={<CoursePage />}/>} />
          <Route path="admin/*" element={<Protected children={<ProtectedAdmin children={<Content />} />} />} />
          <Route path="/admin/content" element={<Protected children={<ProtectedAdmin children={<Content />} />} />} />
          <Route path="*" element={<Construction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
