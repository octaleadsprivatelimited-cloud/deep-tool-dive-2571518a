// Temporary localStorage-based data store
// Will be replaced with Firebase Firestore when ready

const KEYS = {
  MEMBERS: 'rise-members',
  BLOGS: 'rise-blogs',
  GALLERY: 'rise-gallery',
  ADMIN_EMAIL: 'rise-admin-email',
};

const getStore = (key, fallback = []) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const setStore = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// ---- Members ----
export const getMembers = () => getStore(KEYS.MEMBERS);
export const saveMember = (member) => {
  const members = getMembers();
  const idx = members.findIndex((m) => m.id === member.id);
  if (idx >= 0) members[idx] = member;
  else members.push({ ...member, id: member.id || crypto.randomUUID(), createdAt: new Date().toISOString() });
  setStore(KEYS.MEMBERS, members);
  return members;
};
export const deleteMember = (id) => {
  const members = getMembers().filter((m) => m.id !== id);
  setStore(KEYS.MEMBERS, members);
  return members;
};
export const getHighlightedMembers = () => getMembers().filter((m) => m.highlighted);

// ---- Blogs ----
export const getBlogs = () => getStore(KEYS.BLOGS);
export const saveBlog = (blog) => {
  const blogs = getBlogs();
  const idx = blogs.findIndex((b) => b.id === blog.id);
  if (idx >= 0) blogs[idx] = blog;
  else blogs.push({ ...blog, id: blog.id || crypto.randomUUID(), createdAt: new Date().toISOString() });
  setStore(KEYS.BLOGS, blogs);
  return blogs;
};
export const deleteBlog = (id) => {
  const blogs = getBlogs().filter((b) => b.id !== id);
  setStore(KEYS.BLOGS, blogs);
  return blogs;
};

// ---- Gallery ----
export const getGalleryImages = () => getStore(KEYS.GALLERY);
export const saveGalleryImage = (img) => {
  const gallery = getGalleryImages();
  const idx = gallery.findIndex((g) => g.id === img.id);
  if (idx >= 0) gallery[idx] = img;
  else gallery.push({ ...img, id: img.id || crypto.randomUUID(), createdAt: new Date().toISOString() });
  setStore(KEYS.GALLERY, gallery);
  return gallery;
};
export const deleteGalleryImage = (id) => {
  const gallery = getGalleryImages().filter((g) => g.id !== id);
  setStore(KEYS.GALLERY, gallery);
  return gallery;
};

// ---- Admin Auth (temporary) ----
const ADMIN_CREDENTIALS = { email: 'admin@rise.com', password: 'admin123' };

export const adminLogin = (email, password) => {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem('rise-admin-auth', 'true');
    return true;
  }
  return false;
};

export const isAdminLoggedIn = () => localStorage.getItem('rise-admin-auth') === 'true';
export const adminLogout = () => localStorage.removeItem('rise-admin-auth');
