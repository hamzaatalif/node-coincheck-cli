#!/usr/bin/env node

const program = require('commander');
const pkg = require("../package.json");

program.version(pkg.version)
.command("key","Manage API Key -- https://nomics.com")
.command("check","Check coin price information")
.parse(process.argv);

// console.log("Hello from coincheck!!");
// console.log(process.argv)