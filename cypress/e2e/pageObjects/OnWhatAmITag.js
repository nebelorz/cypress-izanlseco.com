/// <reference types="cypress"/>

class onWhatAmITag {
    whatAmITagID = '[id="whatami"]';

    section = {
        frontEndDeveloper: 'Frontend developer',
        frontEndDeveloperNumberOfTags: 10,
        backEndDeveloper: 'Backend developer',
        backEndDeveloperNumberOfTags: 11,
        knowledgeOf: 'Knowledge of',
        knowledgeOfNumberOfTags: 21
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
        this.elements.frontEndDeveloperTags().should('have.length', this.section.frontEndDeveloperNumberOfTags);
    }

    getBackendDeveloperSection() {
        this.elements.sectionBackendDeveloper().should('exist');
        this.elements.backEndDeveloperTags().should('have.length', this.section.backEndDeveloperNumberOfTags);
    }

    getKnowledgeOfSection() {
        this.elements.sectionKnowledgeOf().should('exist');
        this.elements.knowledgeOfTags().should('have.length', this.section.knowledgeOfNumberOfTags);
    }

}

module.exports = new onWhatAmITag();