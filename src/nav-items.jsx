import { Home, Shield, Lock, Eye, Users, FileText, Phone, Award, Briefcase, Newspaper, Handshake } from "lucide-react";
import Index from "./pages/Index.jsx";
import Services from "./pages/Services.jsx";
import Solutions from "./pages/Solutions.jsx";
import ThreatIntelligence from "./pages/ThreatIntelligence.jsx";
import About from "./pages/About.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";
import News from "./pages/News.jsx";
import Partners from "./pages/Partners.jsx";

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
    title: "Services",
    to: "/services",
    icon: <Shield className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "Solutions",
    to: "/solutions",
    icon: <Lock className="h-4 w-4" />,
    page: <Solutions />,
  },
  {
    title: "Threat Intelligence",
    to: "/threat-intelligence",
    icon: <Eye className="h-4 w-4" />,
    page: <ThreatIntelligence />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <FileText className="h-4 w-4" />,
    page: <Resources />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Contact />,
  },
  {
    title: "Careers",
    to: "/careers",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Careers />,
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
];
