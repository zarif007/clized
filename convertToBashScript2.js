import { spawnSync } from 'child_process';

const convertToBashScript = (commands) => {
  const bashScript = `#!/bin/bash\n${commands.join('\n')}`;
  return bashScript;
};

const inputCommands = ["cd go", "npm create vite@latest"];
const bashScript = convertToBashScript(inputCommands);

// Execute the Bash script in the same terminal
spawnSync('bash', ['-c', bashScript], { stdio: 'inherit' });
