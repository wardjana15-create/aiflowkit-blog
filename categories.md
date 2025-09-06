---
layout: page
title: Categories
permalink: /categories/
---

Here you can find all the topics I've written about.

<div class="category-list">
{% for category in site.categories %}
  <h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
</div>
