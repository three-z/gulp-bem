({
	block: 'template-page',
	title: 'Новости',
	content: [
		{
			block: 'content',
			content: [
				{
					block : 'template-breadcrumbs',
					links: [
						{
							url: '#',
							content: 'Главная'
						},
						{
							url: '#',
							content: 'Новости'
						}
					]
				},
				{
					block: 'template-page-title',
					title : 'Новости',
					underline: true
				},
				{
					block: 'news',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'news-list',
									content: [
										{
											url: '#',
											thumb: 'img/tmp/last-news/1.png',
											date: '10.12.15',
											title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
											text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
										},
										{
											url: '#',
											thumb: 'img/tmp/last-news/1.png',
											date: '10.12.15',
											title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
											text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
										},
										{
											url: '#',
											thumb: 'img/tmp/last-news/1.png',
											date: '10.12.15',
											title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
											text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
										},
										{
											url: '#',
											thumb: 'img/tmp/last-news/1.png',
											date: '10.12.15',
											title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
											text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
										},
										{
											url: '#',
											thumb: 'img/tmp/last-news/1.png',
											date: '10.12.15',
											title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
											text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
										},
										{
											url: '#',
											thumb: 'img/tmp/last-news/1.png',
											date: '10.12.15',
											title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
											text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
										},
										{
											url: '#',
											thumb: 'img/tmp/last-news/1.png',
											date: '10.12.15',
											title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
											text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
										},
										{
											url: '#',
											thumb: 'img/tmp/last-news/1.png',
											date: '10.12.15',
											title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
											text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
										}
									].map(function(item) {
										return {
											block: 'news-list-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
															elem: 'image',
															tag: 'img',
															attrs: { src: item.thumb },
														}
													]
												},
												{
													elem: 'info',
													content: [
														{
															elem: 'title',
															cls: 'js-dotted',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: item.title
																}
															]
														},
														{
															elem: 'date',
															content: item.date
														},
														{
															elem: 'text',
															cls: 'js-dotted',
															content: item.text
														},
														{
															elem: 'more',
															content: [
																{
																	block: 'more-button',
																	tag: 'a',
																	attrs: { href: item.url },
																	content: 'подробнее'
																}
															]
														}
													]
												}
											]
										};
									})
								},
								{
									block: 'template-pagination'
								}
							]
						}
					]
				}
			]
		}
	]
})