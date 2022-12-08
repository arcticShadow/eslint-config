# arcticShadows ESLint Config

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
![example workflow](https://github.com/arcticshadow/eslint-config/actions/workflows/release-publish.yml/badge.svg)

## Contributing

If you would like to contribute to this base config - please open a PR.

This project uses semantic-release to orchestrate Release time activities. Its all managed autonomously when code is merged to master

## Using

### Install

```sh
npm i -D @arcticshadow/eslint-config
```

n.b. Install not working? You may need to auth your npm to github (instructions to come)

You will need to ensure that you install the peer dependencies. If you install with npm>=7 this should be taken care of for you.

A Note on Peer Dependencies - The version requirements of dependencies are intentionally left open - but you should ensure that the following conditions are met in your project:

* It is important that you use the same version number for @typescript-eslint/parser and @typescript-eslint/eslint-plugin.

Then add it to your config file

```json
//.eslintrc
{
    "extends": "@arcticshadow",
    
    // Or - for a browser project
    "extends": "arcticshadow/eslint-config/src/browser",

    // Or - for a backend/node project 
    "extends": "@arcticshadow/eslint-config/src/node"

    // Or - for a react native project 
    "extends": "@arcticshadow/eslint-config/src/react-native"
}
```

To enable all rules of this plugin, use @typescript-eslint/parser as a parser for ESLint (this is correctly set for you out of the box) and set the [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsproject) option. Thanks to it, type information is available, which is beneficial or even essential for some rules.

### Optional for VSCode

1. Install the `eslint` extension from Microsoft
2. Add the eslint package to your `.vscode/extensions.json` file so other devs get suggested it automatically.
3. Update your workspace settings `.vscode/settings.json` to include the following

```jsonc
{
    // Disable any formatters provided by vscode extensions for ts/js files
    // This is a brute-force approach as we don't know what extensions you have, or how they may conflict. 
    "[typescript][javascript][typescriptreact][javascriptreact]": {
      "editor.formatOnSave": false,  
    },
    "editor.codeActionsOnSave": {
        // Tell the Eslint plugin to 'fix' all on save. This eslint config provides a prettier plugin - so 
        // ts/js formatting is taken care of. 
        "source.fixAll.eslint": true,
    },
    // The following are setting defaults that align to how prettier formats the code. These settings are 
    // used in various ways by vscode. 
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
    "editor.detectIndentation": false,
}
```
