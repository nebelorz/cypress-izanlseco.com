/// <reference types="cypress"/>

class onCodeTag {
    whatAmITagID = '[id="code"]';
    izansGithubPage = 'github.com/izanlseco/';

    repositories = {
        selfGithub: [],
        elsesGithub: [],
        otherPlatforms: []
    }

    elements = {
        sectionCode: () => cy.get(this.whatAmITagID),
        sectionTags: () => cy.get(this.whatAmITagID).find('[class="column is-one-quarter"]')
    };

    getSectionCode() {
        this.elements.sectionCode().should('exist');
    }

    checkRepositoryOrigin() {
        this.elements.sectionTags().find('a').each((tags) => {
            cy.get(tags).invoke('attr', 'href').then((codeURL) => {
                if (codeURL.includes(this.izansGithubPage)) {
                    this.repositories.selfGithub.push(codeURL);
                } else if (codeURL.includes('github')) {
                    this.repositories.elsesGithub.push(codeURL);
                } else {
                    this.repositories.otherPlatforms.push(codeURL);
                }
            });
        });
    }

    projectsOnOwnRepository() {
        cy.log('|| '+ this.repositories.selfGithub.length + ' REPOS FOUND ||');
        if (this.repositories.selfGithub.length === 0) {
            cy.log('0 repos found');
        } else {
            this.repositories.selfGithub.forEach(repository => {
                cy.log(repository);
            });
        }
    }

    projectsOnElsesRepository() {
        cy.log('|| '+ this.repositories.elsesGithub.length + ' REPOS FOUND ||');
        if (this.repositories.elsesGithub.length === 0) {
            cy.log('0 repos found');
        } else {
            this.repositories.elsesGithub.forEach(repository => {
                cy.log(repository);
            });
        }
    }

    projectsOnOtherPlatforms() {
        cy.log('|| '+ this.repositories.otherPlatforms.length + ' REPOS FOUND ||');
        if (this.repositories.otherPlatforms.length === 0) {
            cy.log('0 repos found');
        } else {
            this.repositories.otherPlatforms.forEach(repository => {
                cy.log(repository);
            });
        }
    }
}

module.exports = new onCodeTag();