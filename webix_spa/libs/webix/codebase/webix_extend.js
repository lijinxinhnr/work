//-----------------------------------------------------------------------------------扩展DataTable--------------------------------------------------------

//动态代理
webix.proxy.ljx = {
	$proxy: true,
	load: function(view, callback, params) {

		webix.extend(params || {}, this.params || {}, true);

		//把datatble 下的params 参数 传进来
		var view_params = view.config.params || {};

		if(typeof view_params == "function") {
			view_params = view_params(view);
		}

		webix.extend(params || {}, view_params || {}, true);

		webix.ajax().bind(view).post(this.source, params, callback);
	}
};

//排序
webix.ui.datatable.prototype.constructor.$protoWait[0].type.index = function() {
	return "<span>" + (arguments[4] + 1) + "</span>";
};

//排序图标
webix.ui.datatable.prototype.constructor.$protoWait[0].type.indexIcon = function() {
	return "<span class='webix_icon fa-list-ol' style='height: 19px;'></span>";
};

//columns 编辑form
webix.editors.$popup.from = {
	view: "popup",
	width: 350,
	height: 150,
	body: {
		view: "form",
		scroll: false,
		width: 300
	}
}

webix.editors.from = webix.extend({
	focus: function() {},
	popupType: "from",
	item: null,

	//设置值调用的方法
	setValue: function(value, item) {
		this.item = item;
		this._is_string = this.config.stringResult || (value && typeof value == "string");
		var view = this.getPopup();
		view.getBody().setValues(item)
		view.show(this.node);
	},

	//获取返回值调用的方法，这个地方目前不支持返回object
	getValue: function() {

		//这个地方运用js 对象参数 为实参的特性修改原来的对象，达到能修改多个列的效果
		webix.extend(this.item, this.getPopup().getBody().getValues(), true);
		return this.item[this.column];
	},

	popupInit: function(popup) {
		popup.getChildViews()[0].attachEvent("onDateSelect", function(value) {
			webix.callEvent("onEditEnd", [value]);
		});
	},

	//获取弹出框的ui
	getPopup: function() {
		if(!this.config.popup)
			this.config.popup = this.createPopup(this.config);
		return webix.$$(this.config.popup);
	},

	//创建pop对象
	createPopup: function(config) {
		var type = webix.editors.$popup[this.popupType];
		if(config.elements && webix.isArray(config.elements)) {
			type.body.elements = config.elements;
		}
		if(typeof type != "string") {

			//获取 editors 中的  pop
			type = webix.editors.$popup[this.popupType] = webix.ui(type);
			this.popupInit(type);

			if(!type.linkInput)
				this.linkInput(document.body);

		}
		return type._settings.id;
	},
}, webix.editors.popup);

//columns 编辑tree
webix.editors.$popup.tree = {
	view: "popup",
	width: 300,
	body: {
		view: "tree",
		type: "lineTree",
		width: 280,
		select: true,
		template: "{common.icon()} {common.customIcon()} <span>#value#</span>"

	}
}

webix.editors.tree = webix.extend({
	focus: function() {},
	popupType: "tree",
	item: null,

	//设置值调用的方法
	setValue: function(value, item) {
		this.item = item;
		this._is_string = this.config.stringResult || (value && typeof value == "string");
		var view = this.getPopup();
		view.show(this.node);
	},

	//获取返回值调用的方法，这个地方目前不支持返回object
	getValue: function() {
		var item = this.getPopup().getBody().getSelectedItem();
		if(this.config.linkFunction) {
			this.config.linkFunction(this.item, item);
		}
		return this.getPopup().getBody().getSelectedId() || this.item[this.config.column];
	},

	popupInit: function(popup) {
		popup.getChildViews()[0].attachEvent("onDateSelect", function(value) {
			webix.callEvent("onEditEnd", [value]);
		});
	},

	//获取弹出框的ui
	getPopup: function() {
		if(!this.config.popup)
			this.config.popup = this.createPopup(this.config);
		return webix.$$(this.config.popup);
	},

	//创建pop对象
	createPopup: function(config) {
		var type = webix.editors.$popup[this.popupType];
		if(config.url) {
			type.body.url = config.url;
		}
		if(typeof type != "string") {

			//获取 editors 中的  pop
			type = webix.editors.$popup[this.popupType] = webix.ui(type);
			this.popupInit(type);

			if(!type.linkInput)
				this.linkInput(document.body);

		}
		return type._settings.id;
	},
}, webix.editors.popup);

//-----------------------------------------------------------------------------------扩展pager--------------------------------------------------------

//扩展pager 右侧显示
webix.ui.pager.prototype.constructor.$protoWait[0].type.count = function(obj) {
	return webix.template("<b style='float:right;line-height: 40px;font-size: 16px;padding-right: 20px;'>第{obj.page} 页 / 共 {obj.limit} 页</b>")({
		page: obj.page + 1,
		limit: obj.limit
	});
}

//-----------------------------------------------------------------------------------扩展tree--------------------------------------------------------
webix.ui.tree.prototype.constructor.$protoWait[0].type.customIcon = function(obj, common) {
	return "<div class='webix_icon " + obj.iconCls + "'></div>";
};

//扩展树的解析
webix.DataDriver.treeJson = webix.extend({
	toObject: function(data) {
		if(!data) return null;
		if(typeof data == "string") {
			try {
				if(this.parseDates) {
					var isodate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{1-3})?Z/;
					data = JSON.parse(data, function(key, value) {
						if(typeof value == "string") {
							if(isodate.test(value))
								return new Date(value);
						}
						return value;
					});
				} else {
					data = JSON.parse(data);
				}
			} catch(e) {
				webix.log(e);
				webix.log(data);
				webix.assert_error("Invalid JSON data for parsing");
				return null;
			}
		}
		var dataObj = data.data;
		var dataResult = [];
		for(var key in dataObj) {
			if(!dataObj[key].pid) {
				dataResult.push(dataObj[key]);
			}
		}

		var temp = [];

		for(var i = 0; i < dataResult.length; i++) {

			temp = this.getChild(dataObj, dataResult[i].id);
			if(temp.length != 0) {
				dataResult[i].data = temp;
			}

		}
		data.data = dataResult;
		return data;
	},
	getChild: function(data, pid) {
		var child = [];
		var temp = [];
		for(var key in data) {

			if(data[key].pid == pid) {
				temp = this.getChild(data, data[key].id);
				if(temp.length != 0) {
					data[key].data = temp;
				}
				child.push(data[key]);
			}
		}
		return child;
	}
}, webix.DataDriver.json, false);

//datatable header 中加过滤图标
webix.ui.datafilter.filterIcon = {
	getValue: function() {},
	setValue: function() {},
	getHelper: function(node, config) {},
	refresh: function(master, node, config) {
		node.onclick = function() {
			master.eachColumn(function(id, item) {
				if(item) {
					if(item.header.length == 1) {
						item.header.push(item.filter ? item.filter : "");
					} else {
						item.header.pop();
					}
				}

			});
			master.refreshColumns();
		}
	},
	render: function(master, config) {
		return "<span class='webix_icon fa-filter' style='height: 19px;'></span>";
	}
};