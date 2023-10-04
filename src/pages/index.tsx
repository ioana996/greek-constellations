import Card from "@/components/Card";
import Navigation from "@/components/Navigation";
import { Constellation } from "@/components/Card/types";
import cassiopeia from "assets/cassiopeia.jpg";
import { useRouter } from "next/router";
// import handler from "./api/hello";
import { useSprings, animated, useTrail } from "react-spring";

export const constellations: Constellation[] = [
  {
    constellation: "cassiopeia",
    image: cassiopeia,
    short:
      "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "taurus",
    image: cassiopeia,
    short:
      "Taurus is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "capricorn",
    image: cassiopeia,
    short:
      "Capricorn is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "libra",
    image: cassiopeia,
    short:
      "Libra is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
];

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80%] m-auto pt-20">
        {constellations.map((constellation, index) => {
          return <Card key={index} {...constellation} />;
        })}
        {/* <Card {...constellations[0]} /> */}
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const allPostsData = handler();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
