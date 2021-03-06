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
								$$("redeemFeeRise").add({
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
								var grid =$$("redeemFeeRise");
								var item =grid.getSelectedItem();
								grid.remove(item.id);

							}
						}
					}
				]
			},
			{
				view: "datatable",
				id:"redeemFeeRise",
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
						id: "remark",
						header: "描述",
						editor: "text",
						width: 200
					}

				]
				}
		]

	}
});
