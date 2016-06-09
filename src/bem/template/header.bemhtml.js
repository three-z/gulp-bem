block('template-header').replace()(function() {
	return [
		{
			block: 'top-line',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'site-title',
									tag : 'h1',
									content: 'Медиа Эксперт Вашего Бизнеса'
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'social-links',
									content: [
										{
											elem: 'list',
											tag: 'ul',
											content: [
												{
													elem: 'item',
													tag: 'li',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'В'
														}
													]
												},
												{
													elem: 'item',
													tag: 'li',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'f'
														}
													]
												}
											]
										}
									]
								},
								{
									block: 'leave-request',
									content: [
										{
											elem: 'button',
											cls: 'fancybox',
											tag: 'a',
											attrs: { href: '#request-popup' },
											content: 'Оставить заявку'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'header',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'logo',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													elem: 'image',
													tag: 'img',
													attrs: { src: 'img/logo.png' },
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'layout-center',
							content: [
								{
									block: 'site-address',
									content: 'г. Архангельск, ул. Попова, д. 6'
								},
								{
									block: 'site-slogan',
									content: 'Производство и размещение аудио и видео роликов'
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'site-phone',
									content: '<small>+7(8182)</small> 65-79-70, 65-79-80, 65-79-87'
								},
								{
									block: 'callback',
									content: [
										{
											elem: 'button',
											tag: 'a',
											cls: 'fancybox',
											attrs: { href: '#callback-popup' },
											content: 'Заказать звонок'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'navigation',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container', mods: { 'no-padding': true } },
					content: [
						{
							elem: 'list',
							tag : 'ul',
							content: [
								{
									elem: 'item',
									tag : 'li',
									mods: { 'active': true },
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Главная'
										}
									]
								},
								{
									elem: 'item',
									tag : 'li',
									mods: { 'dropdown': true },
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Компания'
										},
										{
											elem: 'list',
											tag : 'ul',
											content: [
												{
													elem: 'item',
													tag : 'li',
													mods: { 'active': true },
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'О компании'
														}
													]
												},
												{
													elem: 'item',
													tag : 'li',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'Лицензии'
														}
													]
												},
												{
													elem: 'item',
													tag : 'li',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'Партнеры'
														}
													]
												}
											]
										}
									]
								},
								{
									elem: 'item',
									tag : 'li',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Реклама на телевидении'
										}
									]
								},
								{
									elem: 'item',
									tag : 'li',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Реклама на радио'
										}
									]
								},
								{
									elem: 'item',
									tag : 'li',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Отзывы'
										}
									]
								},
								{
									elem: 'item',
									tag : 'li',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Контакты'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
});