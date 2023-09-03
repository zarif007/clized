const convertToBashScript = (commands) => {
    let bashScript = `#!/bin/bash\n`;
  
    commands.forEach((command) => {
      bashScript += `echo -e "\\e[30;46mRunning '${command}'\\e[0m"\n`;
      bashScript += `${command}\n`;
    });
  
    bashScript += 'read -n1 -r -p "Press any key to exit" key\n';
  
    return bashScript;
  };
  
  export default convertToBashScript;
  