var WEapi = {
  rootUrl: 'http://www.weeatt.com/',

  loginDetails: {
    chef_login: {
      login: "philipcastiglione",
      password: "paradox8"
    }
  },
  loginAuthToken: 'd187c987105b',
  loginUrl: 'api/v1/chefs/sign_in',

  runLogin: function() {
    $.ajax({
      url: WEapi.rootUrl + WEapi.loginUrl,
      method: "POST",
      headers: {
        'x-api-key': WEapi.loginAuthToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(WEapi.loginDetails),
      dataType: 'json'
    }).done(function(data) {
      WEapi.searchAuthToken = data.auth_token;
      WEapi.runSearch();
    });
  },

  search: 'pasta',
  searchAuthToken: '',
  searchUrl1: 'api/v1/recipes?qs=',
  searchUrl2: '&auth_token=',
  page: '&page=',
  pageNum: 1,

  runSearch: function() {
    $.ajax({
      url: WEapi.rootUrl + WEapi.searchUrl1 + WEapi.search + WEapi.searchUrl2 + WEapi.searchAuthToken + WEapi.page + WEapi.pageNum,
      method: "GET",
      headers: {
        'x-api-key': WEapi.loginAuthToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      dataType: 'json'
    }).done(function(data) {
      WEapi.results = data;
    });
  },

  results: {}

};

$(document).ready(function() {
  // WEapi.runLogin();

});
