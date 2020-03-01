const { homedir } = require("os");
const { normalize } = require("path");

module.exports = {
  "'exec' is not a task": `
Please add a to your '${normalize(
    homedir() + "/.lein/profiles.clj"
  )}' the 'lein-exec' plugin:
{:user {:plugins [[lein-exec "0.3.7"]]}}
more here: https://github.com/kumarshantanu/lein-exec`
};
