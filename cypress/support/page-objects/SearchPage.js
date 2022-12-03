/// <reference types="cypress" />

const locators = {
    searchTextBox: "input[name='q']",
    searchButton: "(//input[@name='btnK'])[1]",
};

function enterSearchText(searchText) {
    cy.get(locators.searchTextBox).type(searchText);
}

function clickOnSearchButton() {
    cy.xpath(locators.searchButton).click()
}

module.exports = {
    enterSearchText,
    clickOnSearchButton,
}
