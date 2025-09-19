// import { useEffect } from "react";
// import { useAuth } from "../../authContext"; // Make sure this path is correct
// import toast from "react-hot-toast";
// import Spinner from "../../ui/Spinner";

// const SignInPage = () => {
//   const {user , isLoading, navigate , signInWithGoogle, signInWithGitHub} = useAuth();






//    useEffect(() => {
//     if (user && !isLoading) {
//       navigate("/dashboard", { replace: true });
//     }
//   }, [user, isLoading, navigate]);
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       toast.success("Successfully signed in!");
//     } catch (error) {
//       console.error("Google Sign-In Error:", error);
//       toast.error("Failed to sign in with Google.");
//     }
//   };

//   const handleGitHubSignIn = async () => {
//     try {
//       await signInWithGitHub();
//       toast.success("Successfully signed in!");
//     } catch (error) {
//       console.error("GitHub Sign-In Error:", error);
//       toast.error("Failed to sign in with GitHub.");
//     }
//   };


//     if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Spinner/>
//       </div>
//     );
//   }
//   return (
//     <main className="flex items-center justify-center min-h-screen bg-red-500 dark:bg-gray-900 p-4">
      
//       <div className=" w-[42rem] h-[42rem] rounded-lg py-12 shadow-lg dark:bg-gray-800">
        
//         <div className="text-center">
//           <img 
//             src="/logo-dark.png"
//             alt="The Wild Oasis logo" 
//             className="w-40 h-40 mx-auto mb-4 object-contain" 
//           />
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
//             Log in to your account
//           </h2>
//           <p className=" text-2xl text-gray-600 dark:text-gray-400 mt-20">
//             Welcome back! Please sign in below.
//           </p>
//         </div>

//         <div className="space-y-4 mt-[2rem] flex flex-col items-center justify-center">
//           <button
//             onClick={handleGoogleSignIn}
//             className="group relative w-[30rem] h-[4rem] bg-red-500 flex justify-center items-center  gap-5 py-3 px-4  border-transparent text-[1.4rem] font-medium rounded-md text-gray-700   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
//           >
//             <img 
//               src="/google.png"
//               alt="Google" 
//               className="h-9 w-9 mr-3" 
//             />
          
//           <p>
//             Sign in with Google
//             </p>  
//           </button>
          
//           <button
//             onClick={handleGitHubSignIn}
//             className="group relative w-[30rem]  h-[4rem] flex justify-center items-center gap-5 py-3 px-4 border border-transparent text-[1.4rem] font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 dark:bg-gray-900 dark:hover:bg-black"
//           >
//             <img
//               src="/github-sign.png"
//               alt="GitHub"
//               className="h-9 w-9 mr-3 bg-white object-cover rounded-full "
//             />
//             Sign in with GitHub
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default SignInPage;