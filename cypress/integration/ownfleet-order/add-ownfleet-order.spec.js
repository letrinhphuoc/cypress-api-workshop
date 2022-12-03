/// <reference types="cypress" />
Cypress._.times(1,() => {
    describe("Flow order ownfleet merchant", () => {
        let token;
        let user_id;
        let order_id;
        let merchant_id;
        let manager_token;
    
        before(function(){
            cy.fixture('merchant_ownfleet_user').then(function(ownfleet_user){
                globalThis.ownfleet_user = ownfleet_user;
            })
            cy.fixture('add_ownfleet_order').then(function(add_ownfleet_payload){
                global.add_ownfleet_payload = add_ownfleet_payload;
            })
            cy.fixture('merchant_ownfleet_manager').then(function(ownfleet_manager){
                global.ownfleet_manager = ownfleet_manager
            })
            cy.fixture('cooking_time').then(function(cooking_time){
                global.cookingTime = cooking_time
            })
        })
    
        it("login As Merchant User", () => {
            cy.request({
                method: "POST",
                url: '/auth/test/login',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: ownfleet_user
            }).then(response => {
                expect(response.status).to.eql(200)
                token = response.body.token;
                user_id = response.body.user.id;
    
            })
        })
        it("Add a ownfleet order", () => {
            cy.request({
                method: "POST",
                url: `/user/${user_id}/test/`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token
    
                },
                body: add_ownfleet_payload
            }).then(response => {
                cy.log("Add a ownfleet order boday: " + JSON.stringify(response.body));
                expect(response.status).to.eql(200);
                order_id = response.body.orderId;
                cy.log("This is order Id : " + order_id);
            })
        })
        it("Login as Manager", () => {
            cy.request({
                method: "POST",
                url: "/auth/test/manager/demo/login",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: ownfleet_manager
            }).then(response => {
                expect(response.status).to.eql(200)
                merchant_id = response.body.manager.merchantId;
                manager_token = response.body.token;
            })
        })
        it("Accept merchant order",() =>{
            cy.request({
                method: "PUT",
                url: `/${merchant_id}/orders/${order_id}/test/`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': manager_token
                },
                body: cookingTime
            }).then(response => {
                expect(response.status).to.eql(200)
            })
        })
        it("Confirm merchant order",() => {
            cy.request({
                method: "PUT",
                url: `/abc/${merchant_id}/abc/${order_id}/abc`,
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'User-Agent': 'ApiTestingKey_2a85813f',
                    'x-access-token': manager_token
                }
            }).then(response => {
                expect(response.status).to.eql(200);
            })
        })
        it("Done order ownfleer",() => {
            cy.request({
                method: "PUT",
                url: `/demo/${merchant_id}/order/${order_id}/test`,
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': manager_token
                }
            }).then(response => {
                expect(response.status).to.eql(200);
            })
        })
    })
})
