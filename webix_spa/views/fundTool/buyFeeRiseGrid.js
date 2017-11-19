define(function(){
	return {
		rows: [{
				view: "toolbar",
				cols: [
					{
						view: "button",
						label: "新增",
						type: "iconButton",
						icon: "plus",
						width: 80,
						on: {
							onItemClick: function() {
								$$("buyFeeRise").add({
									$new: true
								});
							}
						}
					},
					{
						view: "button",
						label: "删除",
						type: "iconButton",
						icon: "trash",
						width: 80,
						on: {
							onItemClick: function() {
								var grid =$$("buyFeeRise");
								var item =grid.getSelectedItem();
								grid.remove(item.id);

							}
						}
					}
				]
			},
			{
				view: "datatable",
				id:"buyFeeRise",
				editable: true,
				editaction: "dblclick",
				yCount:4,
				select: "row",
				columns: [ //
					{
						id: "index",
						template: "{common.index()}",
						header: [{
							content: "filterIcon"
						}],
						width: 40
					},
					{
						id: "minimum",
						header: "下限",
						editor: "text",
						sort: "server",
						width: 80
					},
					{
						id: "maximum",
						header: "上限",
						editor: "text",
						width: 80
					},
					{
						id: "fee_rate",
						header: "浮动费率",
						editor: "text",
						width: 80
					},
					{
						id: "fixed_fee",
						header: "固定费",
						editor: "text",
						width: 80
					},
					{
						id: "label_key",
						header: "描述KEY",
						editor: "text",
						width: 100
					},
					{
						id: "label_value",
						header: "描述VALUE",
						editor: "text",
						width: 100
					}

				]
				}
		]

	}
});
