const { expect } = require("chai");

module.exports = {
  before: function(browser) {
    browser.url(process.env.BASE_URL);
  },

  after: function(browser) {
    browser.end();
  },

  "test should check if filter by course works": async function(browser) {
    const homePage = browser.page.home();
    const searchPage = browser.page.searchPage();
    const coursePage = browser.page.coursePage();
    let filterName;

    homePage.waitForElementVisible(
      "@searchForCourse",
      5000,
      "Waiting customer data page appear..."
    );
    homePage.click("@searchForCourse");

    searchPage.waitForElementVisible(
      "@filterTitle",
      5000,
      "Waiting customer data page appear..."
    );
    filterName = await searchPage.getText("@filterTitle");
    console.log(filterName);
    expect(filterName.value).to.equal("Todos os concursos");
  },

  "test should check if filter by teacher works": async function(browser) {
    const homePage = browser.page.home();
    const searchPage = browser.page.searchPage();
    let filterName;

    homePage.waitForElementVisible(
      "@searchForProfessor",
      5000,
      "Waiting customer data page appear..."
    );
    homePage.click("@searchForProfessor");

    searchPage.waitForElementVisible(
      "@filterTitle",
      5000,
      "Waiting customer data page appear..."
    );
    filterName = await searchPage.getText("@filterTitle");
    console.log(filterName);
    expect(filterName.value).to.equal("Todos os professores");
  },

  "test should check if filter by subject works": async function(browser) {
    const homePage = browser.page.home();
    const searchPage = browser.page.searchPage();
    const coursePage = browser.page.coursePage();
    let filterName;

    homePage.waitForElementVisible(
      "@searchForSubject",
      5000,
      "Waiting customer data page appear..."
    );
    homePage.click("@searchForSubject");

    searchPage.waitForElementVisible(
      "@filterTitle",
      5000,
      "Waiting customer data page appear..."
    );
    filterName = await searchPage.getText("@filterTitle");
    console.log(filterName);
    expect(filterName.value).to.equal("Todas as matérias");
  },

  "test should check if filter by area works": async function(browser) {
    const homePage = browser.page.home();
    const searchPage = browser.page.searchPage();
    const coursePage = browser.page.coursePage();
    let filterName;

    homePage.waitForElementVisible(
      "@searchForArea",
      5000,
      "Waiting customer data page appear..."
    );
    homePage.click("@searchForArea");

    searchPage.waitForElementVisible(
      "@filterTitleNoTrend",
      5000,
      "Waiting customer data page appear..."
    );
    filterName = await searchPage.getText("@filterTitleNoTrend");
    console.log(filterName);
    expect(filterName.value).to.equal("Cursos por região");
  }
};
