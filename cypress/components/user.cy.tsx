import { GitHubProvider } from "../../src/contexts/userData";
import User from "../../src/components/User";

describe("User component", () => {
  it("renders user information", () => {
    cy.mount(
      <GitHubProvider>
        <User />
      </GitHubProvider>
    );
    cy.get(".MuiStack-root").should("exist");
  });
});
