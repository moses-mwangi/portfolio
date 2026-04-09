// import React from "react";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer
//       className="py-12 mt-20 border-t"
//       style={{ borderColor: "var(--border-color)" }}
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between gap-6 text-sm opacity-40">
//           <div className="space-y-2">
//             <p>© {new Date().getFullYear()} — Living Archive</p>
//             <p className="text-xs">All artifacts are originals</p>
//           </div>

//           <div className="flex gap-8">
//             <Link href="/">
//               <span className="cursor-pointer hover:opacity-100 transition">
//                 Archive
//               </span>
//             </Link>
//             <Link href="/process">
//               <span className="cursor-pointer hover:opacity-100 transition">
//                 Process
//               </span>
//             </Link>
//             <Link href="/case-studies">
//               <span className="cursor-pointer hover:opacity-100 transition">
//                 Case Studies
//               </span>
//             </Link>
//           </div>

//           <div className="text-xs font-mono">Built with Next.js + ❤️</div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 mt-20 border-t"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6 text-sm opacity-40">
          <div className="space-y-2">
            <p>© {new Date().getFullYear()} — Living Archive</p>
            <p className="text-xs">All artifacts are originals</p>
          </div>

          <div className="flex gap-8">
            <Link href="/">
              <span className="cursor-pointer hover:opacity-100 transition">
                Archive
              </span>
            </Link>
            <Link href="/process">
              <span className="cursor-pointer hover:opacity-100 transition">
                Process
              </span>
            </Link>
            <Link href="/case-studies">
              <span className="cursor-pointer hover:opacity-100 transition">
                Case Studies
              </span>
            </Link>
          </div>

          <div className="text-xs font-mono">Built with Next.js + ❤️</div>
        </div>
      </div>
    </footer>
  );
}
