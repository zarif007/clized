#!/usr/bin/env node

import chalk from "chalk";
import boxSelector from "./boxSelector.js";
import commandSelector from "./commandSelector.js";
import cfonts from "cfonts";
import runAndEnableScript from "./runAndEnableScript.js";

cfonts.say("CLIZED!", {
  font: "block",
  align: "left",
  colors: ["system"],
  background: "transparent",
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: "0",
  gradient: ["blue", "red"],
  independentGradient: false,
  transitionGradient: false,
  env: "node",
});

const selectedBox = await boxSelector();
console.log(chalk.bgCyan(selectedBox));
await commandSelector(selectedBox);
