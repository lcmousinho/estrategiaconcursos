const searchHeader = ".nav-header-links > a:nth-child(index)";

module.exports = {
  elements: {
    searchForCourse: {
      selector: searchHeader.replace("index", 2)
    },
    searchForProfessor: {
      selector: searchHeader.replace("index", 3)
    },
    searchForSubject: {
      selector: searchHeader.replace("index", 4)
    },
    searchForArea: {
      selector: searchHeader.replace("index", 5)
    },
    seeAll:{
        selector: searchHeader.replace("index", 6)
    }
  }
};
