module.exports = (config) => {
	const markdownIt = require("markdown-it");
	const markdownItRenderer = new markdownIt({
		breaks: true, linkify: true
	});
	config.addFilter("byeRight", function(title) {
		return `${title.replace(" | FreedomToons","")}`
	});
	config.addFilter("nl2br", function(content) {
		return `${content.replace(/\n/g, "<br>")}`
	});
	config.addFilter('markdownify', (str) => {
		return markdownItRenderer.renderInline(str)
	});
}
