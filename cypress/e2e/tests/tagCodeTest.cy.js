/// <reference types="cypress"/>

const OnCodeTag = require("../pageObjects/OnCodeTag");

describe('"Code" tag tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Section "Code" exists', () => {
        OnCodeTag.getSectionCode();
    });

    it('...Sorting projects...', () => {
        OnCodeTag.checkRepositoryOrigin();
    });

    it('## REPOS ON IZAN\'S GITHUB PAGE ##', () => {
        OnCodeTag.projectsOnOwnRepository();
    });

    it('## REPOS ON ELSE\'S GITHUB PAGE ##', () => {
        OnCodeTag.projectsOnElsesRepository();
    });

    it('## REPOS ON OTHER PLATFORMS ##', () => {
        OnCodeTag.projectsOnOtherPlatforms();
    });
});