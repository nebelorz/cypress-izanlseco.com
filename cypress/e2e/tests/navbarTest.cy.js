/// <reference types="cypress"/>

const { navBarElements } = require("../pageObjects/OnNavBar");
const OnNavBar = require("../pageObjects/OnNavBar");


describe('Navigation Bar tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('NavBar exists', () => {
    OnNavBar.getNavBar();
  });

  it('NavBar has ' + OnNavBar.elements.navBarNumberOfItems + ' items', () => {
    OnNavBar.getNavBarItems();
  });

  it('Logo image is loaded, response 200 OK and on click leads to main page', () => {
    OnNavBar.clickOnNavBarLogo();
  });

  it('"Home" button navigates to #home', () => {
    OnNavBar.clickOnNavBarHome();
  });

  it('"What am I?" button navigates to #whatami', () => {
    OnNavBar.clickOnNavBarWhatAmI();
  });

  it('"Code" button navigates to #code', () => {
    OnNavBar.clickOnNavBarCode();
  });

  it('"CV" button has response 200 OK and on click leads to a file in .pdf format', () => {
    OnNavBar.clickOnNavBarCV();
  });
});