import React from "react";
import hehe from "assets/cassiopeia.jpg";
import { Constellation } from "@/components/Card/types";
import Image from "next/image";
import cassiopeia from "assets/cassiopeia.jpg";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { constellations } from ".";

const ConstellationPage = (starData: Constellation) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center m-32 gap-4">
      <button onClick={handleClick}>Back</button>
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

export const getAllConstellations = () =>
  constellations.map((x) => ({
    params: x,
  }));

export const getStaticPaths: GetStaticPaths<{
  constellation: string;
}> = async () => {
  const paths = getAllConstellations();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const constellation = constellations.find(
    (e) => e.constellation === params?.constellation
  );
  return {
    props: constellation || constellations[0],
  };
};

export default ConstellationPage;
