import { exec } from "child_process";
import fs from "fs";

function runAndEnableScript() {
  // Define the shell script file
  const shellScript = "gg.sh";

  // Check if the script exists
  if (!fs.existsSync(shellScript)) {
    console.error(`${shellScript} does not exist.`);
    return;
  }

  // Check if the script is executable, and if not, make it executable
  const isExecutable = fs.statSync(shellScript).mode & fs.constants.S_IXUSR;

  if (!isExecutable) {
    console.log(`Making ${shellScript} executable...`);
    try {
      fs.chmodSync(shellScript, "755"); // Make it executable
      console.log(`${shellScript} is now executable.`);
    } catch (error) {
      console.error(`Error making ${shellScript} executable: ${error}`);
      return;
    }
  }

  // Execute the shell script
  exec(`${shellScript}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${shellScript}: ${error}`);
      return;
    }

    // Process the script's output
    console.log(`Script output: ${stdout}`);
  });
}

export default runAndEnableScript;
