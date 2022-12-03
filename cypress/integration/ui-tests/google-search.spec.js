/// <reference types="cypress" />
import{
    enterSearchText,
    clickOnSearchButton,
} from "../../support/page-objects/SearchPage";

describe("POM Example Best Practice", function(){
    it("Should be to do google search", function(){
        cy.visit("https://www.google.com/");
        enterSearchText("page object model");
        clickOnSearchButton();
    })
})