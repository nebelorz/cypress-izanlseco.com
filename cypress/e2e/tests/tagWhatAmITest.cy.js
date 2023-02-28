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

    it('The the Frontend Developer section exists', () => {
        OnWhatAmITag.getFrontendDeveloperSection();
    });

    it('The the Backend Developer section exists', () => {
        OnWhatAmITag.getBackendDeveloperSection();
    });

    it('The the Knowledge Of section exists', () => {
        OnWhatAmITag.getKnowledgeOfSection();
    });
});