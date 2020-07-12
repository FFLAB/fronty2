const settings = {
  "name": "fflabdev",
  "state": {
    "frontity": {
      "url": "https://fflab.info/blog",
      "title": "FFLAB.DEV",
      "description": "FFLAB powered by new Frontity"
    }
  },
  "packages": [
    {
      name: "@frontity/twentytwenty-theme",
  state: {
    theme: {
      menu: [
        ["Home", "/"],
        ["Vignette", "/category/vignette/"],
        ["Racconti", "/category/racconti/"],
        ["Chi", "/start/"],
        ["Strumenti Privacy", "/strumenti-privacy/"]
      ],
      colors: {
        primary: "#E6324B",
        headerBg: "#a00e05",
        footerBg: "##a00e05",
        bodyBg: "#ffffff"
      },
      showSearchInHeader: true,
      showAllContentOnArchive: false,
      featuredMedia: {
        showOnArchive: true,
        showOnPost: true
      },
      autoPreFetch: "hover",
      fontSets: "us-ascii"
    }
  }
},
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://fflab.info/blog/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
  ]
};

export default settings;
