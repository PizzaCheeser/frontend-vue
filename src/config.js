import development from "./config/development";
import production from "./config/production";

var env = process.env.NODE_ENV || "development";

var config = {
  development: development,
  production: production
};

export default config[env];
