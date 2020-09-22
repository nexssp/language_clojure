const { homedir } = require("os");
const { normalize } = require("path");

module.exports = {
  "'exec' is not a task": `
Please add to your '${normalize(
    homedir() + "/.lein/profiles.clj"
  )}' the 'lein-exec' plugin (run below line):
echo "{:user {:plugins [[lein-exec \\"0.3.7\\"][metosin/jsonista \\"0.2.7\\"]]}}" > ${normalize(
    homedir() + "/.lein/profiles.clj"
  )}
more here: https://github.com/kumarshantanu/lein-exec`,
  "Retrieving lein-exec":
    "Clojure is run for the first time, so it needs to download first packages. They appear in the error stream/pipe.",
};
