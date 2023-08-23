#!/usr/bin/env node

import { exec, spawn } from "child_process";

console.log("CLIZED Running...");

const commands = ["git pull", "code ."];

exec(commands.join(" && "), (err, stdout, stderr) => {
  if (err) console.error("error:", stderr);
  console.log(stdout);
});
