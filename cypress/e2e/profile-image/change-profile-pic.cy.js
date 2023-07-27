context("Change user profile-image picture", () => {
  before(() => {
    cy.clearCookies();
    cy.visit("/");
  });

  it("Login", () => {
    cy.get("button").contains("Log In").click();
    cy.get("input[name=email]")
      .type("ebazhanov@yahoo.com")
      .should("have.value", "ebazhanov@yahoo.com");
    cy.get("input[name=password]")
      .type("beHappy1")
      .should("have.value", "beHappy1");
    cy.get("button[data-testid=login").click();
    cy.contains("My Projects").should("be.visible");
    cy.contains("New Project").should("be.visible");
  });

  it("Open profile-image", () => {
    cy.visit("/user/dashboard");
    cy.get('[data-testid="profile-image-image"]').should("be.visible");
  });

  it("Upload new pictures", () => {
    cy.get('[data-testid="profile-image-image"] + div input').selectFile(
      "cypress/fixtures/bengal.jpg",
      { force: true },
    );
    cy.get(
      "[class*='ProfileImageWrapper'] img[data-testid='profile-image-image']",
    ).should("be.visible");
  });

  it("Check presence of picture in the header", () => {
    cy.get(
      "[class*='UserNavigation'] img[data-testid='profile-image-image']",
    ).should("be.visible");
  });
});
