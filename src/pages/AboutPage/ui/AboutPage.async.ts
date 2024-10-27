import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(r => {
  setTimeout(() => {
    //@ts-expect-error test
    r(import("./AboutPage"));
  }, 1500);
}));