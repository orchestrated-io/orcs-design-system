const fs = require("fs");
const path = require("path");

// Function to convert your theme to W3C format
function convertToW3CFormat(theme) {
  const w3cTokens = {
    $schema: "https://json.schemastore.org/tokens.json",
    tokens: {}
  };

  // Iterate through your theme object and convert to W3C format
  for (const [category, values] of Object.entries(theme)) {
    w3cTokens.tokens[category] = {};
    for (const [key, value] of Object.entries(values)) {
      w3cTokens.tokens[category][key] = {
        value: value,
        type: inferType(value)
      };
    }
  }

  return w3cTokens;
}

// Helper function to infer token type
function inferType(value) {
  if (typeof value === "string") {
    if (value.startsWith("#") || value.startsWith("rgb")) return "color";
    if (value.endsWith("px") || value.endsWith("rem") || value.endsWith("em"))
      return "dimension";
    return "string";
  }
  if (typeof value === "number") return "number";
  return "string"; // default type
}

// Read the systemtheme.js file as a string
const systemThemePath = path.resolve(__dirname, "../lib/systemtheme.js");
const systemThemeContent = fs.readFileSync(systemThemePath, "utf8");

// Extract the theme object from the file content
const themeMatch = systemThemeContent.match(/export default ({[\s\S]*});/);
if (!themeMatch) {
  console.error("Could not find theme object in systemtheme.js");
  process.exit(1);
}

const themeString = themeMatch[1];
const theme = eval(`(${themeString})`);

// Convert the theme
const w3cTheme = convertToW3CFormat(theme);

// Write the converted theme to a JSON file in the same directory as systemtheme.js
const outputPath = path.join(
  path.dirname(systemThemePath),
  "w3c-design-tokens.json"
);
fs.writeFileSync(outputPath, JSON.stringify(w3cTheme, null, 2));

console.log(`Conversion complete. W3C Design Tokens saved to ${outputPath}`);
