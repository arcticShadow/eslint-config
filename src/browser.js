module.exports = {
  // The Configs that we have chosen to extend
  extends: ["./index", "plugin:react/recommended"],
  env: {
    browser: true,
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
    },
  },
};
