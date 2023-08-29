#!/usr/bin/env node

import chalk from "chalk";
import boxSelector from "./boxSelector.js";
import commandSelector from "./commandSelector.js";
import cfonts from "cfonts";
import { program } from "commander";

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

program.option("-r, --cmd <type>", "Command");

program.parse(process.argv);

const options = program.opts();

const givenBox = options?.cmd?.split(":")[0];
const givenCommand = options?.cmd?.split(":")[1];

const selectedBox = givenBox
  ? `${givenBox}-commands.json`
  : await boxSelector();
console.log(chalk.bgCyan(` ${selectedBox} `));
await commandSelector(selectedBox, givenCommand);
