define(function() {

	var grid = {
		rows: [{
				view: "toolbar",
				cols: [{
						view: "button",
						label: "刷新",
						type: "iconButton",
						icon: "search",
						width: 80,
						on: {
							onItemClick: function() {

								var w_f_id = webix.uid();
								var popupId = webix.uid();
								var popupMenuIconId = webix.uid();

								webix.ui(addw(w_f_id, popupId, popupMenuIconId)).show();
							}
						}
					},
					{
						view: "button",
						label: "新增",
						type: "iconButton",
						icon: "plus",
						width: 80,
						on: {
							onItemClick: function(a, b, c, d) {
								//webix.ui(window).show();

								/*console.log(a, b, c, d)
								$$("a").add({
									$new: true
								}, 0);*/
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

							}
						}
					},
					{
						view: "button",
						label: "修改",
						type: "iconButton",
						icon: "wrench",
						width: 80,
						on: {
							onItemClick: function() {

								/*	var datatable = this.getParentView().getParentView()
										.getMyDatatable();
									var rows = datatable.getMySelectItem();
									for(var i = 0; i < rows.length; i++) {
										if(rows[i].$new) {
											datatable.remove(rows[i].id)
										} else {
											datatable.hasCss(rows[i].id, "webix_remove_row") ? datatable
												.removeCss(rows[i].id, "webix_remove_row") :
												datatable.addRowCss(rows[i].id,
													"webix_remove_row");
										}

									}*/
							}
						}
					}
				]
				// toolbarElements

			},
			{
				view: "datatable",
				editable: true,
				select: "row",
				navigation: true,
				editaction: "dblclick",
				datafetch: 20,
				rowHeight: 33,
				loadahead: 20,
				tooltip: true,
				dragColumn: true,
				resizeColumn: true,
				columns: [ //
					{
						id: "index",
						template: "{common.index()}",
						// header: "<span class='webix_icon fa-list-ol' style='height: 19px;'></span>", 
						header: [{
							content: "filterIcon"
						}],
						width: 40
					},
					{
						id: "",
						template: "{common.checkbox()}",
						header: [{
							content: "masterCheckbox"
						}],
						width: 40
					},
					{
						id: "",
						template: "{common.radio()}",
						width: 40
					},
					{
						id: "source_id",
						header: "资源ID",
						hidden: true
					},
					{
						id: "id",
						header: "资源代码",
						editor: "text",
						sort: "server",
						width: 140,
						filter: {
							content: "selectFilter"
						}
					},
					{
						id: "name",
						header: "资源名称",
						editor: "text",
						width: 140,
						filter: {
							content: "dateFilter"
						}
					}

				],
				on: {
					"data->onStoreUpdated": function() {
						this.data.each(function(obj, i) {
							//obj.index = i + 1;
						})
					},
					"onBeforeAjax": function(a, b, c, d, e) {
						console.log(111)
						return true;
					}
				},
				url: "post->http://localhost:8080/hello",
				//params: { size: 20 },
				pager: "pagerId"
			},
			{
				view: 'pager',
				id: "pagerId",
				limit: 0,
				page: 0,
				height: 40,
				group: 4, //数据按钮的个数默认最多5个
				size: 20,
				template: '{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()} {common.count()} ',

			}
		]

	}

	return {
		$ui: grid
	};
});