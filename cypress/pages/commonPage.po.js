import BaseClass from "../pages/baseClass.po";

class CommonPage  {
 
  // openBrowser() {
  //   super.openBrowser();
  // }

  getRegisterLink() {
    return cy.get(".ico-register");
  }

  getLoginLink() {
    return cy.get(".ico-login");
  }

  getWishlist() {
    return cy.get(".wishlist-label");
  }

  getShoppingCartLink() {
    return cy.get(".cart-label");
  }
}

export default CommonPage;
