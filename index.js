#!/usr/bin/env node

import { exec } from "child_process";
import exportedCommands from "./exportedCommands.js";

console.log("CLIZED Running...");

const commands = exportedCommands["code ."];

exec(commands.join(" && "), (err, stdout, stderr) => {
  if (err) console.error("error:", stderr);
  console.log(stdout);
});
