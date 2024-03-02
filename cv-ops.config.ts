import { loader, type CVData } from "./cv-gen-nico";
import type { Config } from "./types";

const config: Config<CVData> = {
  template: {
    type: "local",
    url: "./template.ejs",
  },
  loader: () => loader(),
};

module.exports = config;
