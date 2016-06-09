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
block('template-footer').replace()(function() {
	return [
		{
			block: 'bottom-line',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'secondary-logo',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													elem: 'image',
													tag: 'img',
													attrs: { src: 'img/logo-small.png' },
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'secondary-site-phone',
									content: '<small>+7(8182)</small> 65-79-70, 65-79-80, 65-79-87'
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'footer',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									elem: 'columns',
									content: [
										{
											elem: 'column',
											content: [
												{
													elem: 'title',
													tag : 'h3',
													content: 'Компания'
												},
												{
													block: 'secondary-navigation',
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
																			content: 'Партнеры'
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
																			content: 'Реквизиты'
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
																			content: 'Сотрудники'
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
																			content: 'Вакансии'
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
											elem: 'column',
											content: [
												{
													elem: 'title',
													tag : 'h3',
													content: 'Реклама на радио'
												},
												{
													block: 'secondary-navigation',
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
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Европа Плюс'
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
																			content: 'Русское Радио'
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
																			content: 'Авто Радио'
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
																			content: 'Ретро ФМ'
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
																			content: 'Мега ФМ'
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
																			content: 'Наше Радио'
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
																			content: 'Маяк'
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
																			content: 'Регион 29'
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
																			content: 'Дорожное радио'
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
																			content: 'Радио Дача'
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
											elem: 'column',
											content: [
												{
													elem: 'title',
													tag : 'h3',
													content: 'Реклама на ТВ'
												},
												{
													block: 'secondary-navigation',
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
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Первый канал'
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
																			content: 'Россия 1'
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
																			content: 'НТВ'
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
																			content: 'ТНТ'
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
																			content: 'СТС'
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
																			content: 'Пятница'
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
																			content: 'Рен ТВ'
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
																			content: 'ТВЦ'
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
																			content: 'Домашний'
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
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									elem: 'title',
									tag : 'h3',
									content: 'Контакты'
								},
								{
									block: 'site-contacts',
									content: [
										{
											elem: 'list',
											tag : 'ul',
											content: [
												{
													elem: 'item',
													tag : 'li',
													mods: { 'address': true },
													content: 'г. Архангельск, ул. Попова, д. 6, 3 этаж'
												},
												{
													elem: 'item',
													tag : 'li',
													mods: { 'email': true },
													content: [
														{
															tag: 'a',
															attrs: { href: 'mailto:info@mediaexp.ru' },
															content: 'info@mediaexp.ru'
														}
													]
												},
												{
													elem: 'item',
													tag : 'li',
													mods: { 'phone': true },
													content: '+7 (8182) 65-79-70; 65-79-80; 65-79-87'
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
		},
		{
			block: 'copyright',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'text',
							content: '© 2015 "МедиаЭКСПЕРТ" All Rights Reserved, site by <a href="http://leeft.ru/">Leeft</a>'
						}
					]
				}
			]
		}
	];
});
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
block('template-popups').replace()(function() {
	return [
		{
			block: 'callback-popup',
			attrs: { 'id': 'callback-popup' },
			mix: { block: 'popup' },
			content: [
				{
					elem : 'title',
					content : 'Введите ваш номер телефона'
				},
				{
					block : 'callback-popup-form',
					tag: 'form',
					content : [
						{
							elem : 'phone',
							content : [
								{
									tag: '',
									content : '+7'
								},
								{
									elem : 'input',
									tag: 'input',
									attrs: { 'type': 'text' }
								},
							]
						},
						{
							elem : 'buttons',
							content : [
								{
									elem: 'button',
									tag: 'input',
									attrs: { type: 'submit', value: 'Заказать звонок' }
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'request-popup',
			attrs: { 'id': 'request-popup' },
			mix: { block: 'popup' },
			content: [
				{
					elem : 'title',
					content : 'Оставить заявку'
				},
				{
					block : 'request-popup-form',
					tag: 'form',
					content : [
						{
							elem : 'label',
							tag : 'label',
							content : 'Ваше имя'
						},
						{
							elem : 'input',
							tag: 'input',
							attrs: { 'type': 'text' }
						},
						{
							elem : 'label',
							tag : 'label',
							content : 'Комментарий'
						},
						{
							elem : 'text',
							tag: 'textarea',
							content : ''
						},
						{
							elem : 'phone',
							content : [
								{
									tag: '',
									content : '+7'
								},
								{
									elem : 'input',
									tag: 'input',
									attrs: { 'type': 'text' }
								},
							]
						},
						{
							elem : 'buttons',
							content : [
								{
									elem: 'button',
									tag: 'input',
									attrs: { type: 'submit', value: 'Оставить заявку' }
								}
							]
						}
					]
				}
			]
		}
	];
});