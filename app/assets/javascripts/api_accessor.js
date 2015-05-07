var WEapi = {
  // url links
  rootUrl: 'http://www.weeatt.com/',
  loginUrl: 'api/v1/chefs/sign_in',
  searchUrl: 'api/v1/recipes?qs=pasta&per_page=15&auth_token=',
  page: '&page=',
  pageNum: 1,
  totalPages: 10,
  // access details for WEeatt
  loginDetails: {
    chef_login: {
      login: "philipcastiglione",
      password: "paradox8"
    }
  },
  loginAuthToken: 'd187c987105b',
  searchAuthToken: '',
  WEeattHeaders: {
    'x-api-key': '',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  // ajax params structure for reference
  ajaxParams: {
    url: '',
    method: '',
    headers: {},
    data: '',
    dataType: 'json'
  },
  // to set ajax params before call
  setAjax: function(ajaxUrl, ajaxMethod, ajaxHeaders, ajaxData) {
    WEapi.ajaxParams['url'] = ajaxUrl;
    WEapi.ajaxParams['method'] = ajaxMethod;
    WEapi.ajaxParams['headers'] = ajaxHeaders;
    WEapi.ajaxParams['data'] = ajaxData;
  },
  // big ugly script
  runWEapiScript: function() {
    console.log('Beginning script');
    console.log('Setting login authorisation token in ajax params');
    WEapi.WEeattHeaders['x-api-key'] = WEapi.loginAuthToken;
    console.log('Setting ajax parameters for login call to weeatt');
    WEapi.setAjax(
      WEapi.rootUrl + WEapi.loginUrl,
      "POST",
      WEapi.WEeattHeaders,
      JSON.stringify(WEapi.loginDetails)
    );
    console.log('Making ajax login call to weeatt');
    $.ajax(WEapi.ajaxParams).done(function(data) {
      console.log('Setting received search authorisation token in ajax params');
      WEapi.searchAuthToken = data.auth_token;
      console.log('Setting ajax parameters for search call to weeatt');
      WEapi.setAjax(
        WEapi.rootUrl + WEapi.searchUrl + WEapi.searchAuthToken + WEapi.page + WEapi.pageNum,
        "GET",
        WEapi.WEeattHeaders,
        ''
      );
      console.log('Making ajax search call to weeatt');
      $.ajax(WEapi.ajaxParams).done(function(data) {
        console.log('Storing received data in temporary cache');
        WEapi.results = data;
        console.log('Updating number of pages to fetch')
        WEapi.totalPages = data.total_pages;
        console.log('Incrementing page number for next search');
        WEapi.pageNum++;
        console.log('Setting ajax parameters for push to local db');
        WEapi.setAjax(
          "/api/add",
          "POST",
          {},
          WEapi.results
        );
        console.log('Making ajax call for push to local db');
        $.ajax(WEapi.ajaxParams)

        console.log('from ',WEapi.pageNum,' to ',WEapi.totalPages,' try and get follow on pages.');
        for (var i = WEapi.pageNum; i <= WEapi.totalPages * 2; i++) {

          console.log('Setting ajax parameters for search call to weeatt - page ', i);
          WEapi.setAjax(WEapi.rootUrl + WEapi.searchUrl + WEapi.searchAuthToken + WEapi.page + i,"GET",WEapi.WEeattHeaders,'');
          console.log('Making ajax search call to weeatt - page ', i);
          $.ajax(WEapi.ajaxParams).done(function(data) {
            console.log('Storing received data in temporary cache - page ', WEapi.pageNum);
            WEapi.results = data;
            console.log('Setting ajax parameters for push to local db - page ', WEapi.pageNum);
            WEapi.setAjax("/api/add","POST",{},WEapi.results);
            console.log('Making ajax call for push to local db - page ', WEapi.pageNum);
            $.ajax(WEapi.ajaxParams)
            WEapi.pageNum++;
          });

        }

      });
    });
  }
};
