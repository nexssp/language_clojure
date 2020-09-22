let languageConfig = Object.assign({}, require("./clojure.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}
languageConfig.compilers = {
  leiningen: {
    install: `apt-get install -y leiningen
echo "{:user {:plugins [[lein-exec \"0.3.7\"][metosin/jsonista \"0.2.7\"]]}}" > /root/.lein/profiles.clj`,
    command: "lein",
    args: "exec <file>",
    help: `https://leiningen.org`,
  },
  leiningen2: {
    install: "apt-get install -y leiningen",
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

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Alpine Linux":
    languageConfig.compilers.leiningen.install = `${sudo}wget -P /etc/apk/keys/ https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub
${sudo}apk add --no-cache --repository=https://apkproxy.herokuapp.com/sgerrand/alpine-pkg-leiningen leiningen=2.9.1-r0`;
    break;
  default:
    languageConfig.compilers.leiningen.install = replaceCommandByDist(
      `wget https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein
${sudo}chmod +x lein
${sudo}mv lein /usr/local/bin
${sudo}echo "{:user {:plugins [[lein-exec \"0.3.7\"][metosin/jsonista \"0.2.7\"]]}}" > /root/.lein/profiles.clj`
    );
    languageConfig.compilers.leiningen2.install = replaceCommandByDist(
      "apt update && apt install -y leiningen"
    );
    languageConfig.compilers.clj.install = "nexss Install/Clojure";
    break;
}

module.exports = languageConfig;
