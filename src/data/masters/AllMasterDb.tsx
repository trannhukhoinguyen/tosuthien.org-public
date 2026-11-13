import type { EnlightenerInfo } from "@/types.ts";

import Vi00MasterDb from "@/data/masters/vi/Vi00MasterDb.tsx";
import Vi01MasterDb from "@/data/masters/vi/Vi01MasterDb.tsx";

import InMasterDb from "@/data/masters/InMasterDb.tsx";

import JpMasters from "@/data/masters/jp/AllMasterJpDb.tsx";

import KoMasterDb from "@/data/masters/KoMasterDb.tsx";

import CnMasters from "@/data/masters/cn/AllMasterCnDb.tsx";


export const InMasters = InMasterDb
export const ViMasters = [
  Vi00MasterDb,
  Vi01MasterDb,
]
export const KoMasters = KoMasterDb;

const AllMasters: EnlightenerInfo[] = [
  ...InMasters,
  ...CnMasters.flat(),
  ...JpMasters.flat(),
  ...ViMasters.flat(),
  ...KoMasters,
];

export default AllMasters
