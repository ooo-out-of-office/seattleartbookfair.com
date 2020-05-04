const withOffline = require("next-offline");

module.exports = withOffline({
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/exhibitors": { page: "/exhibitors" },
      "/sponsorship": { page: "/sponsorship" },
      "/programs": { page: "/programs" },
    };
  },
});
