const { expect } = require("chai");

module.exports = {
  "@tags": ["number"],
  before: function(browser) {
    browser.url(process.env.BASE_URL);
  },

  after: function(browser) {
    browser.end();
  },

  //TEST IS FALING DUE BUG REPORTED//
  "test should check if course price is correctly displayed": async function(
    browser
  ) {
    const homePage = browser.page.home();
    const searchPage = browser.page.searchPage();
    const professorPage = browser.page.professorPage();
    let numberOfCourses;
    let numberOfCoursesProfessor;

    homePage.waitForElementVisible(
      "@seeAll",
      5000,
      "Waiting customer data page appear..."
    );
    homePage.click("@seeAll");

    searchPage.waitForElementVisible(
      "@numberOfCourseProfessor",
      8000,
      "Waiting customer data page appear..."
    );
    numberOfCourses = await searchPage.getText("@numberOfCourseProfessor");
    searchPage.click("@numberOfCourseProfessor");

    professorPage.waitForElementVisible(
      "@numberOfCourses",
      8000,
      "Waiting customer data page appear..."
    );
    numberOfCoursesProfessor = await professorPage.getText("@numberOfCourses");

    expect(numberOfCoursesProfessor.value).to.contains(numberOfCourses.value);
  }
};
