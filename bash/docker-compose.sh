#!/usr/bin/env bash

#   » Execute an action on a defined container
#
#   Usage:
#
#   npm run docker 𝗖𝗼𝗻𝘁𝗮𝗶𝗻𝗲𝗿
#
#   npm run docker postgres
#
#
#   𝗖𝗼𝗻𝘁𝗮𝗶𝗻𝗲𝗿 names are defined
#   in .github/Docker-Compose.yml


set -a
source ./backend/.env
set +a


#   Compose Documentation:
#   https://docs.docker.com/engine/reference/commandline/compose/


docker compose up                          \
    "$@"