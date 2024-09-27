import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(r => {
  setTimeout(() => {
    //@ts-ignore
    r(import("./AboutPage"));
  }, 1500);
}));