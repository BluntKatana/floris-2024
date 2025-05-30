// import { getUserInformation } from "@/app/server-utils/user.server";
// import { AboutFlorisGrid } from "./about-floris-grid";
// import { MarqueeImage } from "@/components/marquee-image";

// export const revalidate = 60 * 60 * 24 * 7; // revalidate every week

// export default async function AboutFloris() {
//   const userinfo = await getUserInformation();
//   // const stravaStats = await getStravaStats();

//   return (
//     <main className="pb-16">
//       {/* Fill up header with correct color */}
//       <div className="absolute top-0 h-[calc(80px+3rem)] bg-background-svg-top w-full"></div>
//       <div className="relative min-h-[350px] sm:min-h-[400px] 2xl:min-h-[450px] w-full z-0 bg-background-svg-top overflow-hidden">
//         <div className="absolute bottom-[125px] left-0 z-0 w-[calc(100vw+4rem)] h-[100px] -m-12">
//           <div className="relative z-20 w-full h-[300px] -m-px rotate-[4deg] origin-bottom-right">
//             {/* BACKGROUND */}
//             <div className="absolute w-full h-full z-20 bg-background-svg-middle"></div>
//             {/* IMAGES ALL THE WAY IN THE BACK */}
//             <div className="absolute bottom-[100px] z-10 select-none left-0 h-full">
//               <div className="relative w-full flex mr-16">
//                 {/* 1 marquee */}
//                 <div className="flex motion-safe:animate-marquee-slow w-full gap-16 items-end">
//                   {Array.from({ length: 6 }).map((_, index) => (
//                     <MarqueeImage
//                       key={index}
//                       src={`/assets/images/homepage_${Math.min(
//                         index + 1,
//                         5
//                       )}.jpg`}
//                       alt="Picture of the author"
//                       size="md"
//                       priority
//                     />
//                   ))}
//                 </div>
//                 <div className="absolute top-0 flex motion-safe:animate-marquee-slow w-full left-full gap-16 items-end">
//                   {Array.from({ length: 6 }).map((_, index) => (
//                     <MarqueeImage
//                       key={index}
//                       src={`/assets/images/homepage_${Math.min(
//                         index + 1,
//                         5
//                       )}.jpg`}
//                       alt="Picture of the author"
//                       size="md"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 z-0 w-[calc(100vw+4rem)] h-[100px] -m-12">
//           <div className="relative z-20 w-full h-[300px] -m-px rotate-3 origin-bottom-right">
//             {/* BACKGROUND */}
//             <div className="absolute w-full h-full z-20 bg-background-svg-bottom"></div>
//             {/* IMAGES ALL THE WAY IN THE BACK */}
//             <div className="absolute bottom-[150px] z-10 select-none left-0 h-full">
//               <div className="relative w-full flex mr-16">
//                 {/* 1 marquee */}
//                 <div className="flex motion-safe:animate-marquee w-full gap-16 items-end">
//                   {Array.from({ length: 6 }).map((_, index) => (
//                     <MarqueeImage
//                       key={index}
//                       src={`/assets/images/homepage_${Math.min(
//                         index + 1,
//                         5
//                       )}.jpg`}
//                       alt="Picture of the author"
//                       size="lg"
//                       priority
//                     />
//                   ))}
//                 </div>
//                 <div className="absolute top-0 flex motion-safe:animate-marquee w-full left-full gap-16 items-end">
//                   {Array.from({ length: 6 }).map((_, index) => (
//                     <MarqueeImage
//                       key={index}
//                       src={`/assets/images/homepage_${Math.min(
//                         index + 1,
//                         5
//                       )}.jpg`}
//                       alt="Picture of the author"
//                       size="lg"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="section">
//         <div className="mt-6">
//           <AboutFlorisGrid
//             userCoordinates={userinfo?.coords}
//             distanceBetweenPoints={1000} // stravaStats ? stravaStats.ytd_run_totals.distance / 1000 : undefined
//           />
//         </div>
//       </section>
//     </main>
//   );
// }
