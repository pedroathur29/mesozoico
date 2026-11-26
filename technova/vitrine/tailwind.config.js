const base = require("../tailwind.config.ts");
const cfg = base.default ?? base;
module.exports = { ...cfg, content: [__dirname + "/src/**/*.{ts,tsx}", __dirname + "/../src/components/**/*.{ts,tsx}", __dirname + "/../src/app/**/*.{ts,tsx}"] };
