import { promisify } from "util";
import { exec } from "child_process";
import chalk from "chalk";
const execAsync = promisify(exec);

const executeCommands = async (commands) => {
  for (const command of commands) {
    try {
      const { stdout, stderr } = await execAsync(command);
      console.log(`${chalk.green(`Command: ${command}`)}\n${stdout}`);
    } catch (error) {
      console.error(`Error executing command "${command}": ${error.message}`);
    }
  }
};
export default executeCommands;
