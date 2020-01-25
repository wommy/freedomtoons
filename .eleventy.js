module.exports = function(eleventyConfig) {
	const markdownIt = require("markdown-it");
	const markdownItRenderer = new markdownIt({
		breaks: true
	});
	eleventyConfig.addFilter("byeRight", function(title) {
		return `${title.replace(" | FreedomToons","")}`
	});
	eleventyConfig.addFilter("nl2br", function(content) {
		return `${content.replace(/\n/g, "<br>")}`
	});
	eleventyConfig.addFilter('markdownify', (str) => {
		return markdownItRenderer.renderInline(str)
	});
}