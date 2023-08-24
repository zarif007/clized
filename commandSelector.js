import chalk from "chalk";
import { promisify } from "util";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import { exec } from "child_process";
import executeCommands from "./commandExecutor.js";
import processCommands from "./utils/processCommands.js";

const execAsync = promisify(exec);

const commandSelector = async (selectedBox) => {
  const commandFolderPath = "./commands";

  try {
    if (selectedBox && fs.existsSync(commandFolderPath)) {
      const filePath = path.join(commandFolderPath, selectedBox);

      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf8");
        const exportedCommands = JSON.parse(fileContent);

        const options = Object.keys(exportedCommands);

        const answer = await inquirer.prompt({
          name: "CommandSelector",
          message: "Select Command",
          type: "list",
          choices: options,
        });

        const commands = exportedCommands[answer["CommandSelector"]];
        console.log(chalk.bgGreen("Running", answer["CommandSelector"]));

        await executeCommands(processCommands(commands));
      } else {
        console.error("The file does not exist:", filePath);
      }
    } else {
      console.error("The folder does not exist:", commandFolderPath);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default commandSelector;
