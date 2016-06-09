block('template-page-title').replace()(function() {
	return [
		{
			block: 'page-title',
			mods: {
				underline: this.ctx.underline ? true : undefined
			},
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem : 'text',
							tag: 'h2',
							cls: 'js-gradient',
							content : this.ctx.title
						}
					]
				}
			]
		}
	];
});

block('template-breadcrumbs').replace()(function() {
	return [
		{
			block: 'breadcrumbs',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'list',
							tag: 'ul',
							content: this.ctx.links.map(function(item) {
								return {
									elem: 'item',
									tag: 'li',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: item.url },
											content: item.content
										}
									]
								};
							})
						}
					]
				}
			]
		}
	];
});

block('template-pagination').replace()(function() {
	return [
		{
			block: 'pagination',
			content: [
				{
					elem: 'list',
					tag : 'ul',
					content: [
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '← Предыдущая'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '1'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '2'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									elem: 'current',
									tag : 'span',
									content: '3'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '4'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: '5'
								}
							]
						},
						{
							elem: 'item',
							tag : 'li',
							content: [
								{
									tag: 'a',
									elem: 'link',
									attrs: { href: '#' },
									content: 'Следующая →'
								}
							]
						}
					]
				}
			]
		}
	];
});