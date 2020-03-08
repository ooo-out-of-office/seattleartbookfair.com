module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/exhibitors": { page: "/exhibitors" },
      "/sponsorship": { page: "/sponsorship" },
      "/programs": { page: "/programs" }
    };
  }
};
