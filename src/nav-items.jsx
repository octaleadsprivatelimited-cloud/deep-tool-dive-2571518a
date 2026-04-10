import { Home, Users, Calendar, Handshake, Newspaper, Image, Trophy, Phone, UserPlus, LogIn, ShieldCheck, FileText, Heart, IndianRupee, Youtube, BookOpen, Crown } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Directory from "./pages/Directory.jsx";
import Register from "./pages/Register.jsx";
import Events from "./pages/Events.jsx";
import Mentorship from "./pages/Mentorship.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
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
import AdminDonations from "./pages/admin/AdminDonations.jsx";
import AdminEvents from "./pages/admin/AdminEvents.jsx";
import AdminVideos from "./pages/admin/AdminVideos.jsx";
import AdminRegistrations from "./pages/admin/AdminRegistrations.jsx";
import AdminMentorship from "./pages/admin/AdminMentorship.jsx";
import AdminHallOfFame from "./pages/admin/AdminHallOfFame.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import Library from "./pages/Library.jsx";
import AdminLibrary from "./pages/admin/AdminLibrary.jsx";
import AdminLeaders from "./pages/admin/AdminLeaders.jsx";
import MemberProfile from "./pages/MemberProfile.jsx";

export const navItems = [
  { title: "Home", to: "/", icon: <Home className="h-4 w-4" />, page: <Index /> },
  { title: "About", to: "/about", icon: <Users className="h-4 w-4" />, page: <About /> },
  { title: "Directory", to: "/directory", icon: <Users className="h-4 w-4" />, page: <Directory /> },
  { title: "Member Profile", to: "/member/:slug", icon: <Users className="h-4 w-4" />, page: <MemberProfile /> },
  { title: "Register", to: "/register", icon: <UserPlus className="h-4 w-4" />, page: <Register /> },
  { title: "Events", to: "/events", icon: <Calendar className="h-4 w-4" />, page: <Events /> },
  { title: "Event Detail", to: "/events/:id", icon: <Calendar className="h-4 w-4" />, page: <EventDetail /> },
  { title: "Mentorship", to: "/mentorship", icon: <Handshake className="h-4 w-4" />, page: <Mentorship /> },
  { title: "Blog", to: "/blog", icon: <Newspaper className="h-4 w-4" />, page: <Blog /> },
  { title: "Blog Post", to: "/blog/:id", icon: <Newspaper className="h-4 w-4" />, page: <BlogPost /> },
  { title: "Gallery", to: "/gallery", icon: <Image className="h-4 w-4" />, page: <Gallery /> },
  { title: "Achievements", to: "/achievements", icon: <Trophy className="h-4 w-4" />, page: <Achievements /> },
  { title: "Contact", to: "/contact", icon: <Phone className="h-4 w-4" />, page: <Contact /> },
  { title: "Library", to: "/library", icon: <BookOpen className="h-4 w-4" />, page: <Library /> },
  { title: "Donate", to: "/donate", icon: <Heart className="h-4 w-4" />, page: <Donate /> },
  { title: "Login", to: "/login", icon: <LogIn className="h-4 w-4" />, page: <Login /> },
  { title: "Privacy", to: "/privacy", icon: <ShieldCheck className="h-4 w-4" />, page: <Privacy /> },
  { title: "Terms", to: "/terms", icon: <FileText className="h-4 w-4" />, page: <Terms /> },
  { title: "Admin Login", to: "/admin-login", icon: <ShieldCheck className="h-4 w-4" />, page: <AdminLogin /> },
  { title: "Admin", to: "/admin", icon: <ShieldCheck className="h-4 w-4" />, page: <AdminDashboard /> },
  { title: "Admin Registrations", to: "/admin/registrations", icon: <UserPlus className="h-4 w-4" />, page: <AdminRegistrations /> },
  { title: "Admin Members", to: "/admin/members", icon: <Users className="h-4 w-4" />, page: <AdminMembers /> },
  { title: "Admin Events", to: "/admin/events", icon: <Calendar className="h-4 w-4" />, page: <AdminEvents /> },
  { title: "Admin Blogs", to: "/admin/blogs", icon: <Newspaper className="h-4 w-4" />, page: <AdminBlogs /> },
  { title: "Admin Gallery", to: "/admin/gallery", icon: <Image className="h-4 w-4" />, page: <AdminGallery /> },
  { title: "Admin Videos", to: "/admin/videos", icon: <Youtube className="h-4 w-4" />, page: <AdminVideos /> },
  { title: "Admin Donations", to: "/admin/donations", icon: <IndianRupee className="h-4 w-4" />, page: <AdminDonations /> },
  { title: "Admin Mentorship", to: "/admin/mentorship", icon: <Handshake className="h-4 w-4" />, page: <AdminMentorship /> },
  { title: "Admin Hall of Fame", to: "/admin/hall-of-fame", icon: <Trophy className="h-4 w-4" />, page: <AdminHallOfFame /> },
  { title: "Admin Library", to: "/admin/library", icon: <BookOpen className="h-4 w-4" />, page: <AdminLibrary /> },
  { title: "Admin Leaders", to: "/admin/leaders", icon: <Crown className="h-4 w-4" />, page: <AdminLeaders /> },
];
