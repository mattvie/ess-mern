import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: View all books

Then("I should see a list of available books", () => {
    cy.get(".test-class-container").should("be.visible"); // Checks if the list container is visible
    cy.get(".test-class-item").should("have.length.greaterThan", 0); // Ensures at least one book is present
  });

// Scenario: View a specific book

Given("I see a book titled {string} by {string} with ID {string}", (name, author, id) => {
    cy.get(".test-class-item").contains(name).should("exist");
    cy.get(".test-class-item").contains(author).should("exist");
    cy.get(".test-class-item").contains(id).should("exist");
  });

  When("I click the {string} button of the book titled {string}", (button, title) => {
    cy.get(".test-class-item")
      .contains(title)
      .parent()
      .contains(button)
      .click();
  });

  Then("I should be redirected to {string}", (url) => {
    cy.url().should("include", url);
  });

  Then("I should see the details of {string}", (name) => {
    cy.get(".test-class-item").contains(name).should("exist");
  });

  Then("I should see the description {string}", (description) => {
    cy.get(".test-class-item").should("contain", description);
  });

  // Scenario: Create a new book

  Then("I should see the {string} title at the {string} page", (name, page) => {
    cy.visit(page);
    cy.get(".test-class-item", {timeout: 50000}).contains(name).should("exist");
  });

  // Scenario: Create a new book
  When("I fill in the {string} field with {string}", (field, value) => {
    cy.get(`[id="${field}"]`).type(value);
  });

  // Scenario: update an existing book
  