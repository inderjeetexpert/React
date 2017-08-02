const currentTheme = process.env.THEME === 'default' ? 'LenderOutlook' : process.env.THEME;
const theme = require(`./${currentTheme}/index`).default; // eslint-disable-line
export default theme;
