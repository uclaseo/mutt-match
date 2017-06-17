#!/bin/bash
 
set -o errexit # Exit on error

sequelize db:migrate:undo:all
sequelize db:migrate
sequelize db:seed:all
