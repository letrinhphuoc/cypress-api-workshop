/// <reference types="cypress" />
import { errorLoginSchema } from "../../schemas/login-schema";

describe("Login as User", () => {
    before(function(){
        cy.fixture('merchant_ownfleet_incorrect_user').then(function(ownfleet_incorrect_user){
            globalThis.ownfleet_incorrect_user = ownfleet_incorrect_user;
        })
    })
    it("Login with incorrect password", () =>{
       cy.loginAsMerchantUser(ownfleet_incorrect_user).then(response => {
            expect(response.status).to.eql(401);
            expect(response.body.errors[0].message).to.eq("Incorrect password. Please try again.");

            cy.validateSchema(errorLoginSchema,response.body);

        })

    })
})