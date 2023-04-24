export class MainPage {
  elements = {
    loginAndRegButton: () =>
      cy.get(
        ".layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med"
      ),
  };

  goToLoginPage() {
    this.elements.loginAndRegButton().click();
  }
}
