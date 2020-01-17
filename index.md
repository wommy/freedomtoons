---
title: FreedomToons
layout: _default
---

<style>
	.grid-tile{
		display: inline-block;
		height: 200px;
		width: 260px;
		margin: 2px;
		vertical-align: top;
	}
	figure img{
		width: 100%;
		position: relative;
		top:0;
		left:0;
		z-index: -1;
	}
	figcaption{
		position: relative;
		top: -50px;
		background-color: #000;
		color: #FFF;
		height: 2.75rem;
		font-size: 14px;
	}
	figcaption h3{
		margin: 0;
		padding: .25rem .75rem;
	}
</style>
<div class="grid-list">
	{%- for video in videos %}
	<figure class="grid-tile" id='myBtn'>
		<a href='videos/{{ video.title | slug }}/'>
			<img src="https://i.ytimg.com/vi/{{video.id}}/hqdefault.jpg" alt="">
			<figcaption><h3>{{video.title}}</h3></figcaption>
		</a>
	</figure>
	{%-endfor%}
</div>
{% include modal.html%}
<script>
</script>
{%- if jekyll.environment == "development" %}
<!-- {% include todo.html%}-->
{%- endif%}
