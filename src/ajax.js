const apiHost = 'https://bakesaleforgood.com';
var contentData = require('./TestData/ContentData.json');

export default {
  async fetchInitialDeals() {
    try {
      const response = await fetch(apiHost + '/api/deals');
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },
  async fetchInitialContentList() {
    try {
      const response = await fetch(apiHost + '/api/deals');
      //const responseJson = await response.json();
      const responseJson = contentData;
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },
  async fetchDealDetail(dealId) {
    try {
      const response = await fetch(apiHost + '/api/deals/' + dealId);
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },
  async fetchDealSearchResults(searchTerm) {
    try {
      const response = await fetch(apiHost + '/api/deals?searchTerm=' + searchTerm);
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  }
};
