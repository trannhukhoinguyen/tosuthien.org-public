import type { EnlightenerInfo } from "@/types.ts";

import AllMasters from "@/data/masters/AllMasterDb.tsx";
import AllBodhisattvas from "@/data/enlighteners/AllBodhisattvaDb.tsx";
import AllBuddhas from "@/data/enlighteners/AllBuddhaDb.tsx";

const AllEnlighteners: EnlightenerInfo[] = [
  ...AllMasters,
  ...AllBodhisattvas,
  ...AllBuddhas,
];

export default AllEnlighteners;
