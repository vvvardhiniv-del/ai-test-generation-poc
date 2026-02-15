describe("Login Flow", () => {
  it("should navigate to dashboard after login", () => {
    cy.visit("/");

    cy.get('[data-testid="login-btn"]').click();

    cy.location("pathname").should("eq", "/dashboard");
  });
});
