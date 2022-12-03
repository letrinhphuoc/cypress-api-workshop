/// <reference types="Cypress" />

describe("Ownfleet Order", () => {
    let token;
    let user_id;
    let order_id;
    let merchant_id;
    let manager_token;

    before(function () {
        cy.fixture('merchant_ownfleet_user').then(function (ownfleet_user) {
            globalThis.ownfleet_user = ownfleet_user;
        })
        cy.fixture('add_ownfleet_order').then(function (add_ownfleet_payload) {
            global.add_ownfleet_payload = add_ownfleet_payload;
        })
        cy.fixture('merchant_ownfleet_manager').then(function (ownfleet_manager) {
            global.ownfleet_manager = ownfleet_manager
        })
        cy.fixture('cooking_time').then(function (cooking_time) {
            global.cookingTime = cooking_time
        })
    })
    it("Login as a merchant user", () => {
        cy.log("user input " + ownfleet_user);
        cy.loginAsMerchantUser(ownfleet_user).then((response) => {
            expect(response.status).to.eql(200)
            token = response.body.token;
            user_id = response.body.user.id;
        });
    });
    it("Add a ownfleet order", () => {
        cy.addAOwnfleetOrder(user_id,token, add_ownfleet_payload).then((response) => {
            cy.log("Add a ownfleet order body: " + JSON.stringify(response.body));
            expect(response.status).to.eql(200);
            order_id = response.body.orderId;
            cy.log("This is order Id : " + order_id);
        })
    });
    it.only("Login as Manager", () => {
        cy.loginAsMerchantManager(ownfleet_manager).then((response) => {
            expect(response.status).to.eql(200)
            merchant_id = response.body.manager.merchantId;
            manager_token = response.body.token;
        })
    });
    it("Accept merchant order", () => {
        cy.acceptOwnfleetOrder(merchant_id, order_id, manager_token, cookingTime).then((response => {
            expect(response.status).to.eql(200);
        }))

    })
    it("Confirm merchant order", () => {
        cy.confirmMerchantOrder(merchant_id, order_id, manager_token).then((response) => {
            expect(response.status).to.eql(200);
        })
    });
    it("Done order ownfleet", () => {
        cy.doneOwnfleetOrder(merchant_id, order_id,manager_token).then((response) => {
            expect(response.status).to.eql(200);
        })
    });
});