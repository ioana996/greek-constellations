import React from "react";
import hehe from "assets/cassiopeia.jpg";
import { Constellation } from "@/components/Card/types";
import Image from "next/image";
import cassiopeia from "assets/cassiopeia.jpg";
import { GetStaticPaths, GetStaticProps } from "next";

const ConstellationPage = (starData: Constellation) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center m-32 gap-4">
      <Image
        src={hehe}
        alt="cassiopeia"
        width="400"
        height="350"
        className="flex-1"
      />
      <div className="flex flex-1 flex-col gap-4">
        <div className="text-2xl font-bold">{starData.constellation}</div>
        <div className="text-lg">{starData.short}</div>
      </div>
    </div>
  );
};

const constellations: Constellation[] = [
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
      "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
    readTime: "20 MIN READ",
  },
];

export const getAllConstellations = () => {
  constellations.map((c) => {
    return {
      // params: { constellation },
      // fallback: false,
      params: c.constellation,
    };
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllConstellations();
  // console.log(paths);
  // return {
  //   paths,
  //   fallback: false,
  // };

  return {
    // params: { constellation },
    // fallback: false,
    paths: [
      { params: { constellation: "cassiopeia" } },
      { params: { constellation: "taurus" } },
      { params: { constellation: "aries" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (params) => {
  const constellation = constellations.find(
    (e) =>
      e.constellation ===
      (params.params as unknown as Constellation).constellation
  );
  return {
    props: constellation || constellations[0],
  };
};

export default ConstellationPage;
