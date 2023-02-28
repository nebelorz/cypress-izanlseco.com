/// <reference types="cypress"/>

const { section } = require("../pageObjects/onWhatAmITag");
const OnWhatAmITag = require("../pageObjects/onWhatAmITag");

describe('"What am I?" tag tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Section "What am I?" exists', () => {
        OnWhatAmITag.getSectionWhatAmI();
    });

    it('The the Frontend Developer section exists and has ' + section.frontEndDeveloperNumberOfTags + ' tags', () => {
        OnWhatAmITag.getFrontendDeveloperSection();
    });

    it('The the Backend Developer section exists and has ' + section.backEndDeveloperNumberOfTags + ' tags', () => {
        OnWhatAmITag.getBackendDeveloperSection();
    });

    it('The the Knowledge Of section exists and has ' + section.knowledgeOfNumberOfTags + ' tags', () => {
        OnWhatAmITag.getKnowledgeOfSection();
    });

});