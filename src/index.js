const yamlReader = require("./yamlReader");
const calendarHandler = require("./calendarHandler");

const sources = yamlReader.retrieveSources("", "liste.yaml");
calendarHandler.handleData(sources);