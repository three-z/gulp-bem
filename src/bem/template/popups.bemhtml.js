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