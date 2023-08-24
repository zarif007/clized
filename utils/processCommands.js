function processCommands(commands) {
  const processedCommands = [];
  let cdCommand = null;

  for (const command of commands) {
    if (command.startsWith("cd ")) {
      if (!cdCommand) cdCommand = command;
      else cdCommand = `${cdCommand} && ${command}`;
    } else {
      if (cdCommand) {
        cdCommand = `${cdCommand} && ${command}`;
      } else {
        processedCommands.push(command);
      }
    }
  }

  if (cdCommand) processedCommands.push(cdCommand);

  return processedCommands;
}

export default processCommands;
