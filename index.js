#!/usr/bin/env node

const json2csv = require('json2csv');
const fs = require('fs');
const generate = require('./generate')
const { number: NumGen } = require('./config');
const { program } = require('commander');


program
.option('-n, --number <type>', 'number of users')
.option('-d, --domain <type>', 'custom domain name')
// .option('-f, --file <type>', 'the file contains command list')
.parse(process.argv)

console.log(program.number, program.domain);

const entries = Array(+program.number||NumGen).fill().map((_, i) => generate(program.domain))

const headers = ['FirstName', 'LastName', 'EmailId', 'Status', 'SecurityRole1']

const output = json2csv({ data: entries, fields: headers })
const csv = output.replace(/"/g, '');

fs.writeFile('output.csv', csv, function (err) {
  if (err) throw err
  console.log('File saved!')
})