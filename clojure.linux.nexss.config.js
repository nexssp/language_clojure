let languageConfig = Object.assign({}, require("./clojure.win32.nexss.config"));
const sudo = process.sudo;
const distName = process.distro;

languageConfig.dist = distName;

languageConfig.compilers = {
  leiningen: {
    install: `${sudo}apt-get install -y leiningen
${sudo}echo "{:user {:plugins [[lein-exec \"0.3.7\"][metosin/jsonista \"0.2.7\"]]}}" > ~/.lein/profiles.clj`,
    command: "lein",
    args: "exec <file>",
    help: `https://leiningen.org`,
  },
  leiningen2: {
    install: `${sudo}apt-get install -y leiningen`,
    command: "lein",
    args: "run <file>",
    help: ``,
  },
  clj: {
    install: `nexss Install/Clojure`,
    command: "clj",
    args: "<file>",
    help: ``,
  },
};

// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.ALPINE:
    languageConfig.compilers.leiningen.install = `${sudo}nexss java install
${sudo}wget -P /etc/apk/keys/ https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub
${sudo}apk add --no-cache --repository=https://apkproxy.herokuapp.com/sgerrand/alpine-pkg-leiningen leiningen=2.9.1-r0`;
    break;
  default:
    languageConfig.compilers.leiningen.install = process.replacePMByDistro(
      `${sudo}nexss java install
${sudo} apt-get install -y wget
${sudo}wget https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein
${sudo}chmod +x lein
${sudo}mv lein /usr/local/bin
[ -d ~/.lein/ ] || ${sudo}mkdir ~/.lein/
${sudo}echo "{:user {:plugins [[lein-exec \"0.3.7\"][metosin/jsonista \"0.2.7\"]]}}" > ~/.lein/profiles.clj`
    );
    languageConfig.compilers.leiningen2.install = process.replacePMByDistro(
      "apt update && apt install -y leiningen"
    );
    languageConfig.compilers.clj.install = "nexss Install/Clojure";
    break;
}

module.exports = languageConfig;
