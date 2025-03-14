import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: login

Given("I am on the {string} page", (page) => {
  cy.visit(page);
});

When("I fill in {string} with {string}", (field, value) => {
  cy.get(`[name="${field}"]`).type(value);
});

When("I click the {string} button", (button) => {
  cy.get(`[type="${button}"]`).click();
});

Then("I should see a confirmation message {string}", (text) => {
  cy.on("window:alert", (str) => {
    expect(str).to.equal(text);
  });
});