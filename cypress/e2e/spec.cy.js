describe("bstack-demo-test", () => {
  it("passes", () => {
    cy.visit("https://bstackdemo.com/");
    cy.get("#signin").click();
  });
});
