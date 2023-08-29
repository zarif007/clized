import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import executeCommands from "./commandExecutor.js";
import processCommands from "./utils/processCommands.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commandSelector = async (selectedBox, givenCommand) => {
  const commandFolderPath = path.join(__dirname, "commands");

  try {
    if (selectedBox && fs.existsSync(commandFolderPath)) {
      const filePath = path.join(commandFolderPath, selectedBox);

      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf8");
        const exportedCommands = JSON.parse(fileContent);

        let commands = [];

        if (!givenCommand) {
          const options = Object.keys(exportedCommands);

          const answer = await inquirer.prompt({
            name: "CommandSelector",
            message: "Select Command",
            type: "list",
            choices: options,
          });

          commands = exportedCommands[answer["CommandSelector"]];
          console.log(chalk.bgGreen(" Running", answer["CommandSelector"], ""));
        } else {
          if (Object.keys(exportedCommands).includes(givenCommand)) {
            commands = exportedCommands[givenCommand];
            console.log(chalk.bgGreen(" Running", givenCommand, ""));
          } else {
            console.error("This command does not exists in this Box");
            return;
          }
        }

        await executeCommands(processCommands(commands));
      } else {
        console.error("The file does not exist");
      }
    } else {
      console.error("The folder does not exist");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default commandSelector;
