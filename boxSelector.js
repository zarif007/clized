import fs from "fs/promises";
import inquirer from "inquirer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const boxSelector = async () => {
  const boxFolderPath = path.join(__dirname, "boxes");

  try {
    if (
      await fs
        .access(boxFolderPath)
        .then(() => true)
        .catch(() => false)
    ) {
      const filePath = path.join(boxFolderPath, "exportedBoxes.json");

      try {
        const fileContent = await fs.readFile(filePath, "utf8");
        const exportedBoxes = JSON.parse(fileContent);

        const options = Object.keys(exportedBoxes);

        const answer = await inquirer.prompt({
          name: "BoxSelector",
          message: "Select Box",
          type: "list",
          choices: options,
        });

        const box = exportedBoxes[answer["BoxSelector"]];
        return box;
      } catch (error) {
        console.error("Error reading the file:", error);
      }
    } else {
      console.error("The folder does not exist:", boxFolderPath);
    }
  } catch (error) {
    console.error("Error accessing the folder:", error);
  }

  return null;
};

export default boxSelector;
