import { Constellation } from "@/components/Card/types";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cassiopeia from "assets/cassiopeia.jpg";

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Constellation[]>
// ) {
//   res.status(200).json([
//     {
//       constellation: "Cassiopeia",
//       image: cassiopeia,
//       short:
//         "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
//       readTime: "20 MIN READ",
//     },
//     {
//       constellation: "Taurus",
//       image: cassiopeia,
//       short:
//         "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
//       readTime: "20 MIN READ",
//     },
//     {
//       constellation: "Aries",
//       image: cassiopeia,
//       short:
//         "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
//       readTime: "20 MIN READ",
//     },
//     {
//       constellation: "Libra",
//       image: cassiopeia,
//       short:
//         "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
//       readTime: "20 MIN READ",
//     },
//     {
//       constellation: "Gemini",
//       image: cassiopeia,
//       short:
//         "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
//       readTime: "20 MIN READ",
//     },
//     {
//       constellation: "Leo",
//       image: cassiopeia,
//       short:
//         "Cassiopeia is named after the queen of a country on the northern coast of Africa, Aethiopia (not modern Ethiopia). She boasted that she and her daughter Andromeda were more beautiful than the Nereids, the 50 sea nymph attendants of Thetis, the sea goddess, and Poseidon, the sea god.",
//       readTime: "20 MIN READ",
//     },
//   ]);
// }
