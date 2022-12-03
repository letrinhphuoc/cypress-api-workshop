// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {
    loginAsMerchantUser,
    addAOwnfleetOrder,
    acceptOwnfleetOrder,
    confirmMerchantOrder,
    doneOwnfleetOrder,
    loginAsMerchantManager,
} from "./ownfleet-order-commands";

import { validateSchema } from "./validate-schema-command";

Cypress.Commands.add("loginAsMerchantUser", loginAsMerchantUser);
Cypress.Commands.add("addAOwnfleetOrder", addAOwnfleetOrder);
Cypress.Commands.add("acceptOwnfleetOrder", acceptOwnfleetOrder);
Cypress.Commands.add("confirmMerchantOrder", confirmMerchantOrder);
Cypress.Commands.add("doneOwnfleetOrder", doneOwnfleetOrder);
Cypress.Commands.add("loginAsMerchantManager", loginAsMerchantManager);
Cypress.Commands.add("validateSchema", validateSchema);
