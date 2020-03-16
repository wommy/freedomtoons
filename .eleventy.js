const md = require("markdown-it")({ breaks: true, linkify: true });

module.exports = (config) => {
	config.addFilter("byeRight", s => `${s.replace(" | FreedomToons","")}` );
	config.addFilter("nl2br", s => `${s.replace(/\n/g, "<br>")}` );
	config.addFilter('markdownify', s => md.renderInline(s) );
	config.addPassthroughCopy("__static/img");
	config.addPassthroughCopy("__static/font");
	config.addPassthroughCopy({"__static/favicon":"/"});
}
