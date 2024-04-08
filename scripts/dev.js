/* eslint-disable no-undef */
const shell = require("shelljs");
const dotenv = require("dotenv");
const chalk = require("chalk");

dotenv.config();

shell.echo(__dirname);

const workingDir = process.env.WORKING_DIR || "..";

const targets = process.env.CONSUMERS.split(",");

shell.exec("npm run build", () => {
  targets.forEach((target) => {
    const path = `${workingDir}/${target}/node_modules/orcs-design-system/`;

    console.log(
      `\n      ${chalk.yellow("[]\n@")}${chalk.red("xxxxx")}${chalk.yellow(
        "[]{"
      )}:::::::::::::::::::::::>\n      ${chalk.yellow("[]")}`
    );
    console.log(
      `${chalk.yellow("[----")} ${chalk.red(
        "Marching your Orcs to the land of"
      )} "${chalk.green(target)}" ${chalk.yellow("----]")}\n`
    );

    shell.cp("-R", ["dist/", "package.json"], path);
  });
});
