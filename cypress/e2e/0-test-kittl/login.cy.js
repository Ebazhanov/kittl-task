context("Login", () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    cy.visit(
        "https://qa-assignment.stagingdesigner.com/"
    );
    // clear all cookies
    cy.clearCookies();
  });

  it("Visit the website with incorrect credentials", () => {
    cy.get("button").contains("Log In").click();
    cy.get("input[name=email]")
        .type("qaisawesome@kittl.com")
        .should("have.value", "qaisawesome@kittl.com");
    cy.get("input[name=password]")
        .type("bugs<3sadfasdf")
        .should("have.value", "bugs<3sadfasdf");
    cy.get("button[data-testid=login").click();
    cy.get("p")
        .contains("Your credentials are invalid")
        .should("have.text", "Your credentials are invalid");
  });

  it("Visit with valid credentials", () => {
    cy.get("button").contains("Log In").click();
    cy.get("input[name=email]")
        .type("ebazhanov@yahoo.com")
        .should("have.value", "ebazhanov@yahoo.com");
    cy.get("input[name=password]")
        .type("beHappy1")
        .should("have.value", "beHappy1");
    cy.get("button[data-testid=login").click();

    cy.contains('Log In').should('not.exist')
    cy.contains('Sign Up').should('not.exist')

    cy.contains('My Projects').should('be.visible')
    cy.contains('New Project').should('be.visible')
  });

  it("Log out", () => {
    cy.get("button").contains("Log In").click();
    cy.get("input[name=email]")
        .type("ebazhanov@yahoo.com")
        .should("have.value", "ebazhanov@yahoo.com");
    cy.get("input[name=password]")
        .type("beHappy1")
        .should("have.value", "beHappy1");
    cy.get("button[data-testid=login").click();

    cy.get('[data-testid="header"] [data-testid="profile-image"]').eq(0).trigger('mouseover')
    cy.get('[data-testid="log-out"]').click()
    cy.contains('Log In').should('be.visible')
    cy.contains('Sign Up').should('be.visible')
  });
});
