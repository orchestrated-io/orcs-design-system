
// @ts-check
/** @typedef {import("./config").InterplayCLI.Settings} InterplaySettings */

// For import help please refer to https://docs.interplay.io/
// All local paths should be specified relative to the base of repo where you are running the CLI

/**
 * @returns {InterplaySettings}
 */
module.exports = () => {
  return {

    //-----------------------------------------------------------------------------------------------------------------
    //TOKENS SETTINGS

    //Array of token themes to import
    // designTokens: [
    //    {
    //      path: "lib/systemtheme.js",         // Design tokens JSON file
    //      format: "w3c@2022-04-05",            // Format of your tokens JSON
    //      name: "Default theme",               // Name of this theme
    //    }
    // ],


    //-----------------------------------------------------------------------------------------------------------------
    //COMPONENTS SETTINGS

    //The framework used by your code components
    framework: "react",

    //Component packages to import from this code repo
    packages: [
      {
        packagePath: "package.json",      //Path to package.json for package to import
        build: "es/index.js",                //Entry file for component bundling

        src: "lib/index.js",                  //Entry file for component parsing
        //types: "./relative/path/to/index.d.ts",            //(Optional entry for component parsing instead of src)
        ignoreExports: [],                                   //Exports to ignore when parsing
      },
    ],

    //npm packages to build as externals (framework dependencies such as react and react-dom are set automatically)
    //peerDependencies: {},

    //aliases for resolving import paths for parsing and bundling
    //alias: {
    //   //"<alias string>": "./aliased/relative/path/"
    //},

    //build in development mode instead of (default) production mode
    //devBuild: true,

    //Component in your build to use as a wrapper component (if required) when rendering components.
    wrapperComponent: "lib/SystemThemeProvider.js",

    //Files to include on pages containing your components, in addition to the webpack bundle.
    //Can be list of urls and/or local relative paths or a glob pattern e.g. ./dist/bundle.css
    //includePaths: [],

    //Local files to deploy to the CDN in addition your build - glob e.g. ./dist/assets/*.woff2
    //deployPaths: [],

    //modify the babel and webpack settings used to bundle (or provide your own custom build)
    //modifiers:{
    //    babelConfig: (config) => { return config},
    //    webpackConfig: (config, webpack) => { return config},
    //}
  };
};
