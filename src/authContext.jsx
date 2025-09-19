// import { createContext, useState, useEffect, useContext } from 'react';
// import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
// import { auth } from './firebase';

// const AuthContext = createContext();

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//     } catch (error) {
//       console.error("Error signing in with Google:", error);
//     }
//   };

//    const signInWithGitHub = async () => {
//     try {
//       await signInWithPopup(auth, githubProvider);
//     } catch (error) {
//       console.error("Error signing in with GitHub:", error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const value = {
//     user,
//     signInWithGoogle,
//     signInWithGitHub,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };