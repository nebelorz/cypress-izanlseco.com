/// <reference types="cypress"/>

class onWhatAmITag {
    whatAmITagID = '[id="whatami"]';

    section = {
        frontEndDeveloper: 'Frontend developer',
        backEndDeveloper: 'Backend developer',
        knowledgeOf: 'Knowledge of',
    };

    elements = {
        sectionWhatAmI: () => cy.get(this.whatAmITagID),
        sectionFrontendDeveloper: () => cy.get(this.whatAmITagID).contains(this.section.frontEndDeveloper).parent(),
        frontEndDeveloperTags: () => cy.get(this.whatAmITagID).contains(this.section.frontEndDeveloper).parent().find('span'),
        sectionBackendDeveloper: () => cy.get(this.whatAmITagID).contains(this.section.backEndDeveloper).parent(),
        backEndDeveloperTags: () => cy.get(this.whatAmITagID).contains(this.section.backEndDeveloper).parent().find('span'),
        sectionKnowledgeOf: () => cy.get(this.whatAmITagID).contains(this.section.knowledgeOf).parent(),
        knowledgeOfTags: () => cy.get(this.whatAmITagID).contains(this.section.knowledgeOf).parent().find('span')
    };

    getSectionWhatAmI() {
        this.elements.sectionWhatAmI().should('exist');
    }

    getFrontendDeveloperSection() {
        this.elements.sectionFrontendDeveloper().should('exist');
    }

    getBackendDeveloperSection() {
        this.elements.sectionBackendDeveloper().should('exist');
    }

    getKnowledgeOfSection() {
        this.elements.sectionKnowledgeOf().should('exist');
    }

}

module.exports = new onWhatAmITag();