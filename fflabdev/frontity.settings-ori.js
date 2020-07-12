const settings = {
  "name": "fflabdev",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "FFLAB.DEV",
      "description": "FFLAB powered by Frontity"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Vignette",
              "/category/vignette/"
            ],
            [
              "Strumenti Privacy",
              "/strumenti-privacy/"
            ],
            [
              "Chi",
              "/start/"
            ],
            [
              "Racconti",
              "/category/racconti/"
            ]
          ],
          
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }


          
        },
      
        colors: {
          primary: "#E6324B",
          headerBg: "brown",
          footerBg: "#ffffff",
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
    "@frontity/html2react"
  ]
};

export default settings;
