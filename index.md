---
title: FreedomToons
layout: default
---

<style>
	.grid-tile{
		display: inline-block;
		height: 260px;
		width: 260px;
		margin: 2px;
		vertical-align: top;
	}
	.grid-tile h3{
		color: #FFF;
		background-color: #000;
		height: 3rem;
		margin: 0;
		padding: .5rem;
	}
	.grid-tile img{
		width: 100%;
	}
</style>
<div class="grid-list">
	{%-for video in site.data.videos%}
	<div class="grid-tile" id='myBtn'>
		<h3>{{video.title}}</h3>
		<img src="https://i.ytimg.com/vi/{{video.id}}/hqdefault.jpg" alt="">
	</div>
	{%-endfor%}
</div>
{% include modal.html%}
<script>
</script>
{%- if jekyll.environment == "development" %}
<!-- {% include todo.html%}-->
{%- endif%}