import { Home, Users, Calendar, Handshake, Newspaper, Image, Trophy, Phone, UserPlus, LogIn, ShieldCheck, FileText, Heart } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Directory from "./pages/Directory.jsx";
import Register from "./pages/Register.jsx";
import Events from "./pages/Events.jsx";
import Mentorship from "./pages/Mentorship.jsx";
import Blog from "./pages/Blog.jsx";
import Gallery from "./pages/Gallery.jsx";
import Achievements from "./pages/Achievements.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Donate from "./pages/Donate.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminMembers from "./pages/admin/AdminMembers.jsx";
import AdminBlogs from "./pages/admin/AdminBlogs.jsx";
import AdminGallery from "./pages/admin/AdminGallery.jsx";

export const navItems = [
  { title: "Home", to: "/", icon: <Home className="h-4 w-4" />, page: <Index /> },
  { title: "About", to: "/about", icon: <Users className="h-4 w-4" />, page: <About /> },
  { title: "Directory", to: "/directory", icon: <Users className="h-4 w-4" />, page: <Directory /> },
  { title: "Register", to: "/register", icon: <UserPlus className="h-4 w-4" />, page: <Register /> },
  { title: "Events", to: "/events", icon: <Calendar className="h-4 w-4" />, page: <Events /> },
  { title: "Mentorship", to: "/mentorship", icon: <Handshake className="h-4 w-4" />, page: <Mentorship /> },
  { title: "Blog", to: "/blog", icon: <Newspaper className="h-4 w-4" />, page: <Blog /> },
  { title: "Gallery", to: "/gallery", icon: <Image className="h-4 w-4" />, page: <Gallery /> },
  { title: "Achievements", to: "/achievements", icon: <Trophy className="h-4 w-4" />, page: <Achievements /> },
  { title: "Contact", to: "/contact", icon: <Phone className="h-4 w-4" />, page: <Contact /> },
  { title: "Donate", to: "/donate", icon: <Heart className="h-4 w-4" />, page: <Donate /> },
  { title: "Login", to: "/login", icon: <LogIn className="h-4 w-4" />, page: <Login /> },
  { title: "Privacy", to: "/privacy", icon: <ShieldCheck className="h-4 w-4" />, page: <Privacy /> },
  { title: "Terms", to: "/terms", icon: <FileText className="h-4 w-4" />, page: <Terms /> },
  { title: "Admin Login", to: "/admin-login", icon: <ShieldCheck className="h-4 w-4" />, page: <AdminLogin /> },
  { title: "Admin", to: "/admin", icon: <ShieldCheck className="h-4 w-4" />, page: <AdminDashboard /> },
  { title: "Admin Members", to: "/admin/members", icon: <Users className="h-4 w-4" />, page: <AdminMembers /> },
  { title: "Admin Blogs", to: "/admin/blogs", icon: <Newspaper className="h-4 w-4" />, page: <AdminBlogs /> },
  { title: "Admin Gallery", to: "/admin/gallery", icon: <Image className="h-4 w-4" />, page: <AdminGallery /> },
];
