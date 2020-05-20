const { expect } = require("chai");

module.exports = {
  before: function(browser) {
    browser.url(process.env.BASE_URL);
  },

  after: function(browser) {
    browser.end();
  },

  "test should check if course price is correctly displayed": async function(browser) {
    const homePage = browser.page.home();
    const searchPage = browser.page.searchPage();
    const coursePage = browser.page.coursePage();
    const courseDetail = browser.page.courseDetail();
    let coursePriceProfessor;
    let coursePriceDetail;

    homePage.waitForElementVisible(
      "@searchForProfessor",
      5000,
      "Waiting customer data page appear..."
    );
    homePage.click("@searchForProfessor");

    searchPage.waitForElementVisible(
      "@card",
      5000,
      "Waiting customer data page appear..."
    );
    searchPage.setValue("@searchInput", "Ena Loiola");
    searchPage.waitForElementVisible(
      "@card",
      6000,
      "Waiting customer data page appear..."
    );
    searchPage.click("@card");

    coursePage.waitForElementVisible(
      "@coursePrice",
      5000,
      "Waiting customer data page appear..."
    );

    coursePriceProfessor = await coursePage.getText("@coursePrice");
    coursePage.click("@courseName");

    courseDetail.waitForElementVisible(
      "@courseValue",
      5000,
      "Waiting customer data page appear..."
    );

    coursePriceDetail = await courseDetail.getText("@courseValue");

    expect(coursePriceDetail.value).to.contains(coursePriceProfessor.value);
  }
};
