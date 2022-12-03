/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
 const fs = require('fs-extra');
 const path = require('path');

 function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    '..',
    'cypress-api/cypress/config-files',
    `${file}.json`
  );

  return fs.readJson(pathToConfigFile);
}

const xlsx = require('node-xlsx').default; 
module.exports = (on, config) => {
   on('task', { parseXlsx({ filePath }) 
   { return new Promise((resolve, reject) =>
     { try 
      {
         const jsonData = xlsx.parse(fs.readFileSync(filePath)); 
         resolve(jsonData);
         } catch (e) 
         {
            reject(e);
         } });
       }}); } 


const readXlsx = require('./read-xlsx')
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    'readXlsx': readXlsx.read
  })
  const file = config.env.fileConfig || 'development';

  return getConfigurationByFile(file);
}
