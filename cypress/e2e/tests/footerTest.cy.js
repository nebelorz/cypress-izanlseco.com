/// <reference types="cypress"/>

const OnFooter = require("../pageObjects/OnFooter");

describe('"Footer" tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('"Footer" exists', () => {
        OnFooter.checkForFooter();
    });

    it('Github Icon exists and leads to Github page', () => {
        OnFooter.checkForGithubIcon();
    });

    it('Linkedin Icon exists and leads to Linkedin profile', () => {
        OnFooter.checkForLinkedinIcon();
    });

    it('eMail Icon exists and hrefs to correct e-mail', () => {
        OnFooter.checkForEmailIcon();
    });

    it('Upside arrow is clickable and brings to the top of the page', () => {
        OnFooter.checkArrow();
    });
});