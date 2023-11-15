/**
 * combine this with your extension of node/browsers/index etc
 *
 * This disabled conflicting rules so you can use prettier to format separately from eslint (i.e. editor plugin)
 */
module.exports = {
  extends: ["eslint-config-prettier"],
};
