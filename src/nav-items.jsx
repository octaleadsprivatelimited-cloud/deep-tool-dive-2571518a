import { Home, Users, Calendar, Map, Heart, FileText, Phone, Newspaper, Handshake, BookOpen, Landmark, Image, LayoutDashboard, Shield, Crown, Rocket, Briefcase, Building2, HeartPulse, Sparkles, ShieldCheck, Cookie, Lock } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Resources from "./pages/Resources.jsx";
import LibraryPage from "./pages/Library.jsx";
import History from "./pages/History.jsx";
import Gallery from "./pages/Gallery.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Contact from "./pages/Contact.jsx";
import News from "./pages/News.jsx";
import Partners from "./pages/Partners.jsx";
import Chapters from "./pages/Chapters.jsx";
import Events from "./pages/Events.jsx";
import Membership from "./pages/Membership.jsx";
import Donate from "./pages/Donate.jsx";
import Matrimonial from "./pages/Matrimonial.jsx";
import Entrepreneurs from "./pages/Entrepreneurs.jsx";
import JobsPortal from "./pages/JobsPortal.jsx";
import BusinessDirectory from "./pages/BusinessDirectory.jsx";
import HealthPortal from "./pages/HealthPortal.jsx";
import YouthPortal from "./pages/YouthPortal.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import SecurityPolicy from "./pages/SecurityPolicy.jsx";
import DashboardUser from "./pages/DashboardUser.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import DashboardSuperAdmin from "./pages/DashboardSuperAdmin.jsx";

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
    title: "Matrimonial",
    to: "/matrimonial",
    icon: <Heart className="h-4 w-4" />,
    page: <Matrimonial />,
  },
  {
    title: "Entrepreneurs",
    to: "/entrepreneurs",
    icon: <Rocket className="h-4 w-4" />,
    page: <Entrepreneurs />,
  },
  {
    title: "Jobs Portal",
    to: "/jobs",
    icon: <Briefcase className="h-4 w-4" />,
    page: <JobsPortal />,
  },
  {
    title: "Business Directory",
    to: "/business-directory",
    icon: <Building2 className="h-4 w-4" />,
    page: <BusinessDirectory />,
  },
  {
    title: "Health Portal",
    to: "/health-portal",
    icon: <HeartPulse className="h-4 w-4" />,
    page: <HealthPortal />,
  },
  {
    title: "Youth Portal",
    to: "/youth-portal",
    icon: <Sparkles className="h-4 w-4" />,
    page: <YouthPortal />,
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
    title: "History",
    to: "/history",
    icon: <Landmark className="h-4 w-4" />,
    page: <History />,
  },
  {
    title: "Library",
    to: "/library",
    icon: <BookOpen className="h-4 w-4" />,
    page: <LibraryPage />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <Image className="h-4 w-4" />,
    page: <Gallery />,
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
    title: "Privacy Policy",
    to: "/privacy-policy",
    icon: <ShieldCheck className="h-4 w-4" />,
    page: <PrivacyPolicy />,
  },
  {
    title: "Privacy Policy",
    to: "/privacy",
    icon: <ShieldCheck className="h-4 w-4" />,
    page: <PrivacyPolicy />,
  },
  {
    title: "Terms of Service",
    to: "/terms",
    icon: <FileText className="h-4 w-4" />,
    page: <TermsOfService />,
  },
  {
    title: "Terms of Service",
    to: "/terms-of-service",
    icon: <FileText className="h-4 w-4" />,
    page: <TermsOfService />,
  },
  {
    title: "Cookie Policy",
    to: "/cookie-policy",
    icon: <Cookie className="h-4 w-4" />,
    page: <CookiePolicy />,
  },
  {
    title: "Cookie Policy",
    to: "/cookies",
    icon: <Cookie className="h-4 w-4" />,
    page: <CookiePolicy />,
  },
  {
    title: "Security Policy",
    to: "/security-policy",
    icon: <Lock className="h-4 w-4" />,
    page: <SecurityPolicy />,
  },
  {
    title: "Security Policy",
    to: "/security",
    icon: <Lock className="h-4 w-4" />,
    page: <SecurityPolicy />,
  },
  {
    title: "User Dashboard",
    to: "/dashboard/user",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <DashboardUser />,
  },
  {
    title: "Admin Dashboard",
    to: "/dashboard/admin",
    icon: <Shield className="h-4 w-4" />,
    page: <DashboardAdmin />,
  },
  {
    title: "Super Admin",
    to: "/dashboard/super-admin",
    icon: <Crown className="h-4 w-4" />,
    page: <DashboardSuperAdmin />,
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
