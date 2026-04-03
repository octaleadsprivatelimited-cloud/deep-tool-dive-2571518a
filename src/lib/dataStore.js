import { db, storage } from './firebase';
import {
  collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// ---- Helper ----
const fetchCollection = async (name) => {
  const snap = await getDocs(query(collection(db, name), orderBy('createdAt', 'desc')));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// ---- Members ----
export const getMembers = () => fetchCollection('members');

export const saveMember = async (member) => {
  if (member.id) {
    const docRef = doc(db, 'members', member.id);
    const { id, ...data } = member;
    await updateDoc(docRef, data);
  } else {
    await addDoc(collection(db, 'members'), { ...member, createdAt: serverTimestamp() });
  }
};

export const deleteMember = async (id) => {
  await deleteDoc(doc(db, 'members', id));
};

export const getHighlightedMembers = async () => {
  const snap = await getDocs(query(collection(db, 'members'), where('highlighted', '==', true)));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// ---- Blogs ----
export const getBlogs = () => fetchCollection('blogs');

export const saveBlog = async (blog) => {
  if (blog.id) {
    const docRef = doc(db, 'blogs', blog.id);
    const { id, ...data } = blog;
    await updateDoc(docRef, data);
  } else {
    await addDoc(collection(db, 'blogs'), { ...blog, createdAt: serverTimestamp() });
  }
};

export const deleteBlog = async (id) => {
  await deleteDoc(doc(db, 'blogs', id));
};

// ---- Gallery ----
export const getGalleryImages = () => fetchCollection('gallery');

export const saveGalleryImage = async (img) => {
  if (img.id) {
    const docRef = doc(db, 'gallery', img.id);
    const { id, ...data } = img;
    await updateDoc(docRef, data);
  } else {
    await addDoc(collection(db, 'gallery'), { ...img, createdAt: serverTimestamp() });
  }
};

export const deleteGalleryImage = async (id) => {
  await deleteDoc(doc(db, 'gallery', id));
};

// ---- File Upload ----
export const uploadFile = async (file, path) => {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  return getDownloadURL(snapshot.ref);
};

// ---- Donations ----
export const getDonations = () => fetchCollection('donations');

export const saveDonation = async (donation) => {
  await addDoc(collection(db, 'donations'), { ...donation, createdAt: serverTimestamp() });
};

export const deleteDonation = async (id) => {
  await deleteDoc(doc(db, 'donations', id));
};
