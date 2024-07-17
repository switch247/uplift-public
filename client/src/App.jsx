

import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, Image, LifeBuoy, Settings, Clock, Bot, Users, MessageCircle } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Entry from "./pages/Home";
import Auth from "./pages/Auth";
import Vent from "./pages/Vent";
// import Ai from "./pages/Ai";
import Consultants from "./pages/Consultants";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile"
import Events from "./pages/Events";
import { useSelector } from "react-redux";
import AiChat from "./pages/Ai-chat/AiChat";
import Ai from "./pages/Ai-chat/Ai";
import Appointment from "./pages/Appointment";
import Notification from "./pages/Notification";
import Land from './pages/Land/Land';
function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="flex">
      <Router>
        <Routes>
          <Route exact path="/auth" element={<Auth />} />
          {/* <Route path="*" element={
            <Land/>
          } /> */}
          <Route
            path="/"
            element={ 
              <Land/>
            }
          />
          <Route
            path="/chat"
            element={user ? <Layout><Chat /> </Layout> : <Navigate to="../auth" />}
          />
          <Route
            path="/profile"
            element={user ? <Layout><Profile /> </Layout> : <Navigate to="../auth" />}
          />

          <Route path="/home" element={
            user ? <Layout><Entry /> </Layout> : <Navigate to="../auth" />

          } >
          </Route>

          <Route path="/vent" element={
            user ? <Layout><Vent /> </Layout> : <Navigate to="../auth" />

          } />


          <Route path="/consultants" element={
            user ? <Layout><Consultants /> </Layout> : <Navigate to="../auth" />

          } >
          </Route>

          <Route path="/events">
            <Route path="" element={
              <Layout>
                <Events />
              </Layout>
            } />
          </Route>
          <Route path="/ai">
            <Route path="" element={
              user ? <Layout><Ai /> </Layout> : <Navigate to="../auth" />
            } />
          </Route>
          <Route path="/ai-chat">
            <Route path="" element={
              user ? <Layout><AiChat /> </Layout> : <Navigate to="../auth" />

            } />
          </Route>

          <Route path="/appointment/:id" element={
            user ? <Layout><Appointment /> </Layout> : <Navigate to="../auth" />

          } >
          </Route>
          <Route path="/notifications" element={
            user ? <Layout><Notification /> </Layout> : <Navigate to="../auth" />

          } ></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
function buildSidebar() {
  return (
    <Sidebar>
      <SidebarItem icon={<Home size={20} />} text="Home" path={'/home'} />
      <SidebarItem icon={<Users size={20} />} text="Consultants" path={'/consultants'} />
      <SidebarItem icon={<Image size={20} />} text="Vent" path={'/vent'} />
      <SidebarItem icon={<Clock size={20} />} text="Events" path={'/events'} />
      <SidebarItem icon={<MessageCircle size={20} />} text="Messages" alert path={'/chat'} />
      <SidebarItem icon={<Bot size={20} />} text="Ai" path={'/ai-chat'} />
      <hr className="my-3" />
      <SidebarItem icon={<Settings size={20} />} text="Settings" path={'/profile'} />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
    </Sidebar>
  )
}


// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      {buildSidebar()}
      <div className='flex flex-col w-full h-screen overflow-y-auto'>
        <Navbar />
        {children}
      </div>
    </>
  );
}

