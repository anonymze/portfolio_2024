// import type { ComponentProps } from "react";
// import { lazy, Suspense } from "react";

// interface LazySvg extends Omit<ComponentProps<"svg">, "ref"> {
//   name: SVGIcons;
// }
// export const LazySvg = ({ name, ...props }: LazySvg) => {
//   const Svg = lazy(() => import(`../assets/icons/${name}.svg?react`));
//   return (
//     <Suspense fallback={"..."}>
//       <Svg {...props} />
//     </Suspense>
//   );
// };
