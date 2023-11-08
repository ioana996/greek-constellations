import Card from "@/components/Card";
import Navigation from "@/components/Navigation";
import { Constellation } from "@/components/Card/types";
import cassiopeia from "assets/cassiopeia.jpg";

export const constellations: Constellation[] = [
  {
    constellation: "cassiopeia",
    name: "Cassiopeia",
    image: cassiopeia,
    short:
      "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "taurus",
    name: "Taurus",
    image: cassiopeia,
    short:
      "Taurus is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "capricorn",
    name: "Capricorn",
    image: cassiopeia,
    short:
      "Capricorn is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "libra",
    name: "Libra",
    image: cassiopeia,
    short:
      "Libra is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "canella",
    name: "Capricorn",
    image: cassiopeia,
    short:
      "Capricorn is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "bella",
    name: "Libra",
    image: cassiopeia,
    short:
      "Libra is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "purcella",
    name: "Capricorn",
    image: cassiopeia,
    short:
      "Capricorn is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
  {
    constellation: "ionella",
    name: "Libra",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container mx-auto gap-8 pt-20 mt-20">
        {constellations.map((constellation, index) => {
          return <Card key={index} {...constellation} />;
        })}
      </div>
    </div>
  );
}
