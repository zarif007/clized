import fs from "fs";
import { spawnSync } from "child_process";
import convertToBashScript from "./convertToBashScript.js";

function executeBashScript(commands) {
  const bashScript = convertToBashScript(commands)

  // Write the Bash script to a temporary file
  fs.writeFileSync("mainScript.sh", bashScript);

  spawnSync('bash', ['-c', bashScript], { stdio: 'inherit' });
}

export default executeBashScript;
