// import { SignIn, SignUp } from "@clerk/nextjs";
// import { useState } from "react";

// type AuthModalProps = {
//   open: boolean;
//   onClose: () => void;
// };

// export default function AuthModal({ open, onClose }: AuthModalProps) {
//   const [mode, setMode] = useState<"login" | "signup">("login");

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white w-[95%] max-w-md p-5 rounded-xl relative">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute right-3 top-3 text-gray-600 text-xl"
//         >
//           ✕
//         </button>

//         {/* Switch Buttons */}
//         <div className="flex gap-4 justify-center mb-4">
//           <button
//             onClick={() => setMode("login")}
//             className={`px-4 py-2 rounded ${
//               mode === "login" ? "bg-orange-600 text-white" : "bg-gray-200"
//             }`}
//           >
//             Login
//           </button>

//           <button
//             onClick={() => setMode("signup")}
//             className={`px-4 py-2 rounded ${
//               mode === "signup" ? "bg-orange-600 text-white" : "bg-gray-200"
//             }`}
//           >
//             Signup
//           </button>
//         </div>

//         {/* Render Clerk Components */}
//         {mode === "login" ? (
//           <SignIn redirectUrl="/dashboard" />
//         ) : (
//           <SignUp redirectUrl="/dashboard" />
//         )}
//       </div>
//     </div>
//   );
// }
