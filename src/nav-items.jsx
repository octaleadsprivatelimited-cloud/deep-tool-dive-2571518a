import { Home, Users, Calendar, Map, Heart, FileText, Phone, Newspaper, Handshake, BookOpen } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Resources from "./pages/Resources.jsx";
import LibraryPage from "./pages/Library.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Contact from "./pages/Contact.jsx";
import News from "./pages/News.jsx";
import Partners from "./pages/Partners.jsx";
import Chapters from "./pages/Chapters.jsx";
import Events from "./pages/Events.jsx";
import Membership from "./pages/Membership.jsx";
import Donate from "./pages/Donate.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Chapters",
    to: "/chapters",
    icon: <Map className="h-4 w-4" />,
    page: <Chapters />,
  },
  {
    title: "Events",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
    page: <Events />,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <FileText className="h-4 w-4" />,
    page: <Resources />,
  },
  {
    title: "Library",
    to: "/library",
    icon: <BookOpen className="h-4 w-4" />,
    page: <LibraryPage />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Contact />,
  },
  {
    title: "News",
    to: "/news",
    icon: <Newspaper className="h-4 w-4" />,
    page: <News />,
  },
  {
    title: "Partners",
    to: "/partners",
    icon: <Handshake className="h-4 w-4" />,
    page: <Partners />,
  },
  {
    title: "Membership",
    to: "/membership",
    icon: <Users className="h-4 w-4" />,
    page: <Membership />,
  },
  {
    title: "Donate",
    to: "/donate",
    icon: <Heart className="h-4 w-4" />,
    page: <Donate />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <Users className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Sign Up",
    to: "/signup",
    icon: <Users className="h-4 w-4" />,
    page: <Signup />,
  },
];
