import type { Product } from "@/lib/types";
import { diastar } from "./diastar";
import { estar } from "./estar";
import { misanranDiastar } from "./misanran-diastar";
import { misanranEstar } from "./misanran-estar";
import { sansaxia } from "./sansaxia";
import { sunpower } from "./sunpower";
import { oya } from "./oya";
import { sawasawa } from "./sawasawa";
import { supreme7 } from "./supreme7";
import { coatingPlus } from "./coating-plus";
import { coatingStrong } from "./coating-strong";
import { coatingCool } from "./coating-cool";
import { allSeason } from "./allseason";
import { anta } from "./anta";
import { ttasine } from "./ttasine";
import { greenforce } from "./greenforce";
import { blackforce } from "./blackforce";

/** 표시 순서 — 프리미엄 → 스탠다드, 그룹 안에서는 대표성 순. */
export const PO_FILMS: Product[] = [
  // Premium (8)
  diastar,
  estar,
  misanranDiastar,
  misanranEstar,
  sansaxia,
  sunpower,
  oya,
  sawasawa,
  supreme7,
  // Standard (7)
  coatingPlus,
  coatingStrong,
  coatingCool,
  allSeason,
  anta,
  ttasine,
  greenforce,
  blackforce,
];
