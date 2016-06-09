block('template-page').replace()(function() {
	return [
		'<!DOCTYPE html>',
		{
			tag: 'html',
			content: [
				{
					tag: 'head',
					content: [
						{
							tag: 'meta',
							attrs: { charset: 'utf-8' }
						},
						{
							tag: 'title',
							content: this.ctx.title
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Cuprum:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/normalize.css/normalize.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/slick.js/slick/slick.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/fancybox/source/jquery.fancybox.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'css/styles.css' }
						}
					]
				},
				{
					tag: 'body',
					content: [
						{
							cls: 'page',
							bem: false,
							content: [
								{
									block: 'template-header'
								},
								this.ctx.content,
								{
									block: 'template-footer'
								},
								{
									block: 'template-popups'
								}
							]
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jquery/dist/jquery.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/slick.js/slick/slick.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/pxgradient/pxgradient-1.0.3.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jQuery.dotdotdot/src/jquery.dotdotdot.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/fancybox/source/jquery.fancybox.pack.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'js/scripts.js' }
						},
					]
				}
			]
		}
	];
});