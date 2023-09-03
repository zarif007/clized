import fs from "fs";
import { exec } from "child_process";
import convertToBashScript from "./convertToBashScript.js";

function executeBashScript(commands) {
  const bashScript = convertToBashScript(commands)

  // Write the Bash script to a temporary file
  fs.writeFileSync("mainScript.sh", bashScript);

  // Make the script executable
  exec("chmod +x mainScript.sh", (error) => {
    if (error) {
      console.error("Error making the script executable.");
    } else {
      // Execute the Bash script
      exec("mainScript.sh", (error, stdout, stderr) => {
        if (error) {
          console.error("Error executing the script.");
          console.error(stderr);
        } else {
          console.log(stdout);
        }
      });
    }
  });
}

export default executeBashScript;
