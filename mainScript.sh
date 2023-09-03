#!/bin/bash
echo -e "\e[30;46mRunning 'git pull'\e[0m"
git pull
echo -e "\e[30;46mRunning 'code .'\e[0m"
code .
read -n1 -r -p "Press any key to exit" key
