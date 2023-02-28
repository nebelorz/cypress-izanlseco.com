/// <reference types="cypress"/>

class onCodeTag {
    URLS = {
        github: 'https://github.com/izanlseco',
        linkedin: 'https://www.linkedin.com/in/izanlopezseco/',
        email: 'IzanLS09@gmail.com'
    };

    elements = {
        footer: () => cy.get('footer'),
        upsideArrow: () => cy.get('footer button[arial-label="scroll to top"]'),
        githubIcon: () => cy.get('footer').find('[title="Access to GitHub"]'),
        linkedinIcon: () => cy.get('footer').find('[title="Access to LinkedIN"]'),
        emailIcon: () => cy.get('footer').find('[title="Send an e-mail"]')
    };

    checkForFooter() {
        this.elements.footer().should('exist');
    }

    checkArrow() {
        this.elements.upsideArrow().click().should('exist');
    }

    checkForGithubIcon() {
        this.elements.githubIcon().invoke('attr', 'href').should('eq', this.URLS.github);
        this.elements.githubIcon()
            .invoke('attr', 'href')
            .then(IconURL => {
                cy.request(IconURL).its('status').should('eq', 200);
            });
        this.elements.githubIcon().invoke('removeAttr', 'target').click();
        cy.origin(this.URLS.github, () => {
            cy.url().should('include', 'github');
        });
    }

    checkForLinkedinIcon() {
        this.elements.linkedinIcon().invoke('attr', 'href').should('eq', this.URLS.linkedin);
        this.elements.linkedinIcon().invoke('removeAttr', 'target').click();
        cy.origin(this.URLS.linkedin, () => {
            cy.url().should('include', 'linkedin');
        });
    }

    checkForEmailIcon() {
        this.elements.emailIcon().invoke('attr', 'href').should('eq', 'mailto:' + this.URLS.email);
    }
}

module.exports = new onCodeTag();