import Card from "@/components/Card";
import { Constellation } from "@/components/Card/types";
import cassiopeia from "assets/cassiopeia.jpg";
// import handler from "./api/hello";
import { useSprings, animated, useTrail } from "react-spring";

const constellations: Constellation[] = [
  {
    constellation: "Cassiopeia",
    image: cassiopeia,
    short:
      "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "Taurus",
    image: cassiopeia,
    short:
      "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80%] m-auto pt-20">
      {constellations.map((constellation, index) => {
        return <Card key={index} {...constellation} />;
      })}
      {/* <Card {...constellations[0]} /> */}
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
