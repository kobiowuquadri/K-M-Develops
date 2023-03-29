document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

window.theme = window.theme || {};
theme.routes = {
  home: "/",
  cart: "/cart.js",
  cartPage: "/cart",
  cartAdd: "/cart/add.js",
  cartChange: "/cart/change.js",
  search: "/search"
};
theme.strings = {
  soldOut: "Sold Out",
  unavailable: "Unavailable",
  inStockLabel: "In stock, ready to ship",
  stockLabel: "Low stock - [count] items left",
  willNotShipUntil: "Ready to ship [date]",
  willBeInStockAfter: "Back in stock [date]",
  waitingForStock: "Inventory on the way",
  cartSavings: "You're saving [savings]",
  cartEmpty: "Your cart is currently empty.",
  cartTermsConfirmation: "You must agree with the terms and conditions of sales to check out",
  searchCollections: "Collections:",
  searchPages: "Pages:",
  searchArticles: "Articles:"
};
theme.settings = {
  dynamicVariantsEnable: true,
  cartType: "drawer",
  isCustomerTemplate: false,
  moneyFormat: "${{amount}}",
  predictiveSearch: true,
  predictiveSearchType: "product,article,page,collection",
  quickView: false,
  themeName: 'Motion',
  themeVersion: "9.0.0"
};