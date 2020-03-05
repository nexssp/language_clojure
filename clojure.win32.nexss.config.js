let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Clojure";
languageConfig.description =
  "Clojure is a robust, practical, and fast programming language with a set of useful features that together form a simple, coherent, and powerful tool.";
languageConfig.url = "https://clojure.org";
languageConfig.founders = ["Rich Hickey"];
languageConfig.developers = [""];
languageConfig.years = ["2007"];
languageConfig.extensions = [".clj"];
languageConfig.executeCommandLine = "clj";
languageConfig.printCommandLine = "";
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "clj";
languageConfig.builders = {};
languageConfig.compilers = {
  leiningen: {
    install: "scoop install leiningen",
    command: "lein",
    args: "exec <file>",
    help: `https://leiningen.org`
  },
  clj2: {
    install: "scoop install leiningen",
    command: "lein",
    args: "run <file>",
    help: ``
  },

  clj: {
    install: "nexss Install/Clojure",
    command: "clj",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.clojure.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "installed.",
    messageAfterInstallation: null, // sometimes there is need of add something to the files can be add here eg php for composer.
    installed: "nimble list",
    search: "nimble search",
    install: "nimble install",
    uninstall: "nimble uninstall",
    help: "npm help",
    version: "npm --version",
    init: () => {
      // if (
      //   !require("fs").existsSync(
      //     require("path").join(process.cwd(), "package.json")
      //   )
      // ) {
      //   require("child_process").execSync("nimble init", { stdio: "inherit" });
      //   console.log("initialized npm project.");
      // } else {
      //   console.log("npm already initialized.");
      // }
    },
    // if command not found in specification
    // run directly on package manager
    else: "nimble"
  }
};

module.exports = languageConfig;
