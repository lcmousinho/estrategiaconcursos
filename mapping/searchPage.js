module.exports = {
  elements: {
    searchInput: {
      locateStrategy: "xpath",
      selector:
        '//*[@id="b_cursos"]/div[1]/div/div/section[1]/header/div/div/form/input'
    },
    filterTitle: {
      selector: "div > div > div > section:nth-child(2) > header > h1"
    },
    filterTitleNoTrend: {
      selector: ".section-header-title"
    },
    card: {
      selector: "section:nth-child(2) > .page-result-list > .card-prod > h1 > a"
    },
    numberOfCourseProfessor: {
      selector:
        ".section-cou:nth-child(4) > .container:nth-child(2) > .section-cou-content > .slick-list > .slick-track > .slick-slide:nth-child(2) > .section-cou-content-group >.card-prof > a > .content > .card-cou-courses"
    }
  }
};
