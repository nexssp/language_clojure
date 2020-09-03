let languageConfig = Object.assign({}, require("./php.win32.nexss.config"));
languageConfig.compilers = {
  leiningen: {
    install: "brew install leiningen",
    command: "lein",
    args: "exec <file>",
    help: `https://leiningen.org`,
  },
  leiningen2: {
    install: "brew install leiningen",
    command: "lein",
    args: "run <file>",
    help: ``,
  },
  clj: {
    install: "nexss Install/Clojure",
    command: "clj",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
