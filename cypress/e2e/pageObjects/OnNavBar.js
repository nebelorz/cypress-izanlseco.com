/// <reference types="cypress"/>

class onNavBar {
    buttonText = {
        home: 'Home',
        whatAmI: 'What am I?',
        code: 'Code',
        CV: 'CV'
    };

    URLS = {
        mainPageURL: 'www.izanlseco.com/',
        homePageURL: 'www.izanlseco.com/#home',
        whatAmIURL: 'www.izanlseco.com/#whatami',
        codeURL: 'www.izanlseco.com/#code'
    };

    elements = {
        navBar: () => cy.get('nav'),
        navBarItems: () => cy.get('nav').find('a'),
        logo: () => cy.get('nav').find('a').first(),
        homeButton: () => cy.contains('nav a', this.buttonText.home),
        whatAmIButton: () => cy.contains('nav a', this.buttonText.whatAmI),
        codeButton: () => cy.contains('nav a', this.buttonText.code),
        CVButton: () => cy.contains('nav a', this.buttonText.CV),
        navBarNumberOfItems: 5
    };

    getNavBar() {
        this.elements.navBar().should('exist');
    }

    getNavBarItems() {
        this.elements.navBarItems().should('have.length', this.elements.navBarNumberOfItems);
    }

    clickOnNavBarHome() {
        this.elements.homeButton()
            .click();
        cy.url().should('contain', this.URLS.homePageURL);
    }

    clickOnNavBarWhatAmI() {
        this.elements.whatAmIButton()
            .click();
        cy.url().should('contain', this.URLS.whatAmIURL);
    }

    clickOnNavBarCode() {
        this.elements.codeButton()
            .click();
        cy.url().should('contain', this.URLS.codeURL);
    }

    clickOnNavBarCV() {
        this.elements.CVButton()
            .invoke('attr', 'href')
            .then(CVUrl => {
                cy.request(CVUrl).its('status').should('eq', 200);
                cy.wrap(CVUrl).should('contain', '.pdf');
            });
    }

    clickOnNavBarLogo() {
        this.elements.logo()  // Asserts the call is 200 OK
            .invoke('attr', 'href')
            .then(LogoURL => {
                cy.request(LogoURL).its('status').should('eq', 200);
            });
        this.elements.logo() // Asserts the alt text is not shown
            .find('img')
            .invoke('attr', 'alt')
            .then(logoAltText => {
                this.elements.logo().should('not.have.text', logoAltText);
            });
        this.elements.logo().click()
    }
}


module.exports = new onNavBar();