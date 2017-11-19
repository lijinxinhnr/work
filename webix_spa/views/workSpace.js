define(["./privcateMethod/createSql", "./fundTool/buyFeeRiseGrid", "./fundTool/redeemFeeRiseGrid"],
	function(createSql, buyFeeRiseGrid, redeemFeeRiseGrid) {
		var form = {
			view: "form",
			scroll: false,
			lableWidth: 200,
			elementsConfig: {
				labelWidth: 120
			},
			elements: [{
					cols: [{
							rows: [{
								view: "text",
								name: "code",
								label: "基金代码"
							}, {
								view: "text",
								name: "shortName",
								label: "基金名称"
							}, {
								view: "text",
								name: "name",
								label: "基金全称"
							}, {
								view: "combo",
								width: 300,
								label: '基金类型',
								name: "type",
								options: {
									data: [{
										id: "0",
										value: "股票型基金"
									}, {
										id: "1",
										value: "债券型基金"
									}, {
										id: "2",
										value: "货币型基金"
									}, {
										id: "3",
										value: "混合型基金"
									}, {
										id: "4",
										value: "专户基金"
									}, {
										id: "5",
										value: "指数型基金"
									}, {
										id: "6",
										value: "QDII基金"
									}, ]
								}
							}, {
								view: "text",
								name: "taNo",
								label: "TA代码"
							}, {
								view: "combo",
								width: 300,
								label: '风险等级',
								name: "riskLevel",
								options: {
									//template:"Extra #value#",
									data: [{
										id: "01",
										value: "低风险"
									}, {
										id: "02",
										value: "中低风险"
									}, {
										id: "03",
										value: "中风险"
									}, {
										id: "04",
										value: "中高风险"
									}, {
										id: "05",
										value: "高风险"
									}]
								}
							}, {
								view: "text",
								name: "fund_trustee",
								label: "基金管理人"
							}, {
								view: "text",
								name: "fund_custodian",
								label: "基金托管人 "
							}, {
								view: "text",
								name: "fund_manager",
								label: "基金经理"
							}, {
								view: "text",
								name: "fund_manager_fee",
								label: "基金管理费"
							}, {
								view: "text",
								name: "fund_custodian_fee",
								label: "基金托管费"
							}, {
								view: "text",
								name: "minHoldShare",
								label: "最低持有份额"
							}]
						},
						{
							rows: [{
									view: "text",
									name: "first_per_min",
									label: "最低购买额"
								}, {
									view: "text",
									name: "con_per_min",
									label: "最低追加"
								}, {
									view: "text",
									name: "sell_per_min",
									label: "最低赎回"
								}, {
									view: "text",
									name: "custodianConfirmDay",
									label: "委托确认天数"
								}, {
									view: "text",
									name: "repamentedDay",
									label: "赎回到账天数"
								}, {
									view: "text",
									name: "cancelDay",
									label: "撤单到账天数"
								},
								{
									view: "combo",
									width: 300,
									label: '最低折扣率',
									name: "discount_rate",
									options: {
										//template:"Extra #value#",
										data: [{
											id: "0.1",
											value: "1折"
										}, {
											id: "0.2",
											value: "2折"
										}, {
											id: "1",
											value: "10折（无折扣）"
										}]
									}
								}, {
									view: "text",
									name: "performance_appraisal_standard",
									label: "业绩评价标准"
								}, {
									view: "text",
									name: "investment_goals",
									label: "投资目标"
								}, {
									view: "text",
									name: "risk_yield",
									label: "风险收益特征"
								}, {
									view: "text",
									name: "portfolio_range",
									label: "投资组合范围"
								}, {
									view: "text",
									name: "fund_manager_desc",
									label: "基金经理简介"
								}
							]
						}

					]
				},
				{ view: "fieldset", label: "基金申购费率", body: buyFeeRiseGrid },
				{ view: "fieldset", label: "基金赎回费率", body: redeemFeeRiseGrid },
				{
					view: "button",
					type: "form",
					value: "提交",
					click: function() {

						var formValues = this.getParentView().getValues();
						var buyFeeRiseRows = $$("buyFeeRise").data.pull;
						var redeemFeeRiseRows = $$("redeemFeeRise").data.pull;

						$$("t_fund_product").setValue(createSql.t_fund_product(formValues));
						$$("t_fund_product_ext").setValue(createSql.t_fund_product_ext(formValues));
						$$("t_fund_product_summary").setValue(createSql.t_fund_product_summary(formValues));
						$$("t_fund_product_fee").setValue(createSql.t_fund_product_fee(formValues, buyFeeRiseRows, redeemFeeRiseRows));
					}
				}
			]

		};

		var t_fund_product_sql = { view: "textarea", label: "t_fund_product_sql", labelPosition: "top", id: "t_fund_product" };

		var t_fund_product_ext_sql = { view: "textarea", label: "fund_product_ext_sql", labelPosition: "top", id: "t_fund_product_ext" };

		var t_fund_product_summary_sql = { view: "textarea", label: "t_fund_product_summary_sql", labelPosition: "top", id: "t_fund_product_summary" };

		var t_fund_product_fee_sql = { view: "textarea", label: "t_fund_product_fee_sql", labelPosition: "top", id: "t_fund_product_fee" };

		var grid = {
			cols: [
				form,
				{
					rows: [{
							cols: [t_fund_product_sql,
								t_fund_product_ext_sql
							]
						},
						{
							cols: [t_fund_product_summary_sql,
								t_fund_product_fee_sql
							]
						}

					]
				}
			]

		}

		return {
			$ui: grid
		};
	});