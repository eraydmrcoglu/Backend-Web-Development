exports.getIndexPage = async (req, res) => {
    res.status(200).render("index", {
      page_name: "index",
    });
  };
  

exports.getAboutPage = async (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.getContactPage = async (req, res) => {
  res.render("contact", {
    page_name: "contact",
  });
};

exports.getFurnituresPage = async (req, res) => {
  res.render("furnitures", {
    page_name: "furnitures",
  });
};
