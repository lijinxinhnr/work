define(function() {

	var method = {

		t_fund_product: function(formValues) {

			var insert_t_fund_product_sql = "INSERT INTO t_fund_product(";

			//列
			var t_fund_product_column = [];
			t_fund_product_column.push("product_id");
			t_fund_product_column.push("product_code");
			t_fund_product_column.push("partner_code");
			t_fund_product_column.push("product_category");
			t_fund_product_column.push("product_type");
			t_fund_product_column.push("product_short_name");
			t_fund_product_column.push("product_full_name");
			t_fund_product_column.push("fund_income_unit");
			t_fund_product_column.push("nav");
			t_fund_product_column.push("share_type");
			t_fund_product_column.push("risk_level");
			t_fund_product_column.push("status");
			t_fund_product_column.push("is_enable");
			t_fund_product_column.push("support_aip");
			t_fund_product_column.push("generator_time");
			t_fund_product_column.push("create_time");
			t_fund_product_column.push("update_time");

			insert_t_fund_product_sql = insert_t_fund_product_sql + t_fund_product_column.join(",") + ") VALUES("

			//值
			var t_fund_product_values = [];
			t_fund_product_values.push("'" + formValues.code.trim() + "'");
			t_fund_product_values.push("'" + formValues.code.trim() + "'");
			t_fund_product_values.push("'" + formValues.taNo.trim() + "'");
			t_fund_product_values.push("'10'");
			t_fund_product_values.push("'" + formValues.type.trim() + "'");
			t_fund_product_values.push("'" + formValues.shortName.trim() + "'");
			t_fund_product_values.push("'" + formValues.name.trim() + "'");
			t_fund_product_values.push("'1'");
			t_fund_product_values.push("'1'");
			t_fund_product_values.push("'A'");
			t_fund_product_values.push("'" + formValues.riskLevel.trim() + "'");
			t_fund_product_values.push("'1'");
			t_fund_product_values.push("'1'");
			t_fund_product_values.push("'1'");
			t_fund_product_values.push("NOW()");
			t_fund_product_values.push("NOW()");
			t_fund_product_values.push("NOW()");

			insert_t_fund_product_sql = insert_t_fund_product_sql + t_fund_product_values.join(",") + ");";

			return insert_t_fund_product_sql;
		},

		t_fund_product_ext: function(formValues) {

			var insert_t_fund_product_ext_sql = "INSERT INTO t_fund_product_ext(";

			//列
			var t_fund_product_ext_column = [];
			t_fund_product_ext_column.push("id");
			t_fund_product_ext_column.push("product_id");
			t_fund_product_ext_column.push("discount_rate");
			t_fund_product_ext_column.push("fund_management_fee");
			t_fund_product_ext_column.push("fund_custody_fee");
			t_fund_product_ext_column.push("fund_sales_service_fee");
			t_fund_product_ext_column.push("con_per_max");
			t_fund_product_ext_column.push("con_per_min");
			t_fund_product_ext_column.push("first_per_max");
			t_fund_product_ext_column.push("first_per_min");
			t_fund_product_ext_column.push("sell_per_max");
			t_fund_product_ext_column.push("sell_per_min");
			t_fund_product_ext_column.push("create_time");
			t_fund_product_ext_column.push("update_time");

			insert_t_fund_product_ext_sql = insert_t_fund_product_ext_sql + t_fund_product_ext_column.join(",") + ") VALUES("

			//值
			var t_fund_product_ext_values = [];
			t_fund_product_ext_values.push("'" + formValues.code.trim() + "'");
			t_fund_product_ext_values.push("'" + formValues.code.trim() + "'");
			t_fund_product_ext_values.push("'" + formValues.discount_rate.trim() + "'");
			t_fund_product_ext_values.push("'" + this._percent2Num(formValues.fund_manager_fee.trim()) + "'");
			t_fund_product_ext_values.push("'" + this._percent2Num(formValues.fund_custodian_fee.trim()) + "'");
			t_fund_product_ext_values.push("'0'");
			t_fund_product_ext_values.push("'0'");
			t_fund_product_ext_values.push("'" + formValues.con_per_min.trim() + "'");
			t_fund_product_ext_values.push("'0'");
			t_fund_product_ext_values.push("'" + formValues.first_per_min.trim() + "'");
			t_fund_product_ext_values.push("'0'");
			t_fund_product_ext_values.push("'" + formValues.sell_per_min.trim() + "'");
			t_fund_product_ext_values.push("NOW()");
			t_fund_product_ext_values.push("NOW()");

			insert_t_fund_product_ext_sql = insert_t_fund_product_ext_sql + t_fund_product_ext_values.join(",") + ");";

			return insert_t_fund_product_ext_sql;
		},

		t_fund_product_summary: function(formValues) {
			var insert_t_fund_product_summary_sql = "INSERT INTO t_fund_product_summary(";
			//列
			var t_fund_product_summary_column = [];
			t_fund_product_summary_column.push("product_id");
			t_fund_product_summary_column.push("product_name");
			t_fund_product_summary_column.push("fund_trustee");
			t_fund_product_summary_column.push("fund_manager");
			t_fund_product_summary_column.push("fund_custodian");
			t_fund_product_summary_column.push("fund_custodian_fee");
			t_fund_product_summary_column.push("min_amount");
			t_fund_product_summary_column.push("fund_manager_fee");
			t_fund_product_summary_column.push("performance_appraisal_standard");
			t_fund_product_summary_column.push("investment_goals");
			t_fund_product_summary_column.push("risk_yield");
			t_fund_product_summary_column.push("portfolio_range");
			t_fund_product_summary_column.push("generator_time");
			t_fund_product_summary_column.push("create_time");
			t_fund_product_summary_column.push("update_time");
			t_fund_product_summary_column.push("fund_manager_desc");

			insert_t_fund_product_summary_sql = insert_t_fund_product_summary_sql + t_fund_product_summary_column.join(",") + ") VALUES("

			//值
			var t_fund_product_summary_values = [];
			t_fund_product_summary_values.push("'" + formValues.code.trim() + "'");
			t_fund_product_summary_values.push("'" + formValues.name.trim() + "'");
			t_fund_product_summary_values.push("'" + formValues.fund_trustee.trim() + "'");
			t_fund_product_summary_values.push("'" + formValues.fund_manager.trim() + "'");
			t_fund_product_summary_values.push("'" + formValues.fund_custodian.trim() + "'");
			t_fund_product_summary_values.push("'" + this._percent2Num(formValues.fund_custodian_fee.trim()) + "'");
			t_fund_product_summary_values.push("'" + formValues.first_per_min.trim() + "'");
			t_fund_product_summary_values.push("'" + this._percent2Num(formValues.fund_manager_fee.trim()) + "'");
			t_fund_product_summary_values.push("'" + formValues.performance_appraisal_standard.trim() + "'");
			t_fund_product_summary_values.push("'" + formValues.investment_goals.trim() + "'");
			t_fund_product_summary_values.push("'" + formValues.risk_yield.trim() + "'");
			t_fund_product_summary_values.push("'" + formValues.portfolio_range.trim() + "'");
			t_fund_product_summary_values.push("NOW()");
			t_fund_product_summary_values.push("NOW()");
			t_fund_product_summary_values.push("NOW()");
			t_fund_product_summary_values.push("'" + formValues.fund_manager_desc.trim() + "'");

			insert_t_fund_product_summary_sql = insert_t_fund_product_summary_sql + t_fund_product_summary_values.join(",") + ");";
			return insert_t_fund_product_summary_sql;
		},

		t_fund_product_fee: function(formValues, buyFeeRiseRows, redeemFeeRiseRows) {

			var insert_t_fund_product_fee_sql = "";

			var rowNo = 0;
			var indexNo = 1;

			var bayFeeRiseData = this._create_value(formValues, buyFeeRiseRows, "10", indexNo, rowNo);

			var redeemFeeRiseData = this._create_value(formValues, redeemFeeRiseRows, "20", indexNo, bayFeeRiseData.rowNo);

			if(redeemFeeRiseData != "") {

				insert_t_fund_product_fee_sql = insert_t_fund_product_fee_sql + bayFeeRiseData.sql;
			}

			if(redeemFeeRiseData != "") {

				if(redeemFeeRiseData != "") {
					insert_t_fund_product_fee_sql = insert_t_fund_product_fee_sql + ";" + redeemFeeRiseData.sql;
				} else {
					insert_t_fund_product_fee_sql = insert_t_fund_product_fee_sql + redeemFeeRiseData.sql + ";";
				}

			}

			return insert_t_fund_product_fee_sql;

		},

		_create_value: function(formValues, rows, type, indexNo, rowNo) {

			var sql = "";
			var valueArr = [];
			for(rowId in rows) {

				row = rows[rowId];
				if(row == undefined) {
					continue;
				}

				rowNo++;

				sql = "INSERT INTO t_fund_product_fee(";

				//列
				var t_fund_product_fee_column = [];
				t_fund_product_fee_column.push("fund_product_fee_id");
				t_fund_product_fee_column.push("product_id");
				t_fund_product_fee_column.push("fee_type");
				t_fund_product_fee_column.push("minimum");
				t_fund_product_fee_column.push("maximum");
				t_fund_product_fee_column.push("fee_rate");
				t_fund_product_fee_column.push("fixed_fee");
				t_fund_product_fee_column.push("label_key");
				t_fund_product_fee_column.push("label_value");
				t_fund_product_fee_column.push("create_time");
				t_fund_product_fee_column.push("update_time");
				t_fund_product_fee_column.push("index_no");

				sql = sql + t_fund_product_fee_column.join(",") + ") VALUES("

				//值
				var t_fund_product_fee_values = [];
				t_fund_product_fee_values.push("'" + formValues.code.trim() + "0000" + rowNo + "'");
				t_fund_product_fee_values.push("'" + formValues.code.trim() + "'");
				t_fund_product_fee_values.push("'" + type + "'");
				t_fund_product_fee_values.push("'" + row.minimum == undefined ? 0 : "'" + this._Str2Num(row.minimum.trim()) + "'");
				t_fund_product_fee_values.push(row.maximum == undefined ? "NULL" : "'" + this._Str2Num(row.maximum.trim()) + "'");
				t_fund_product_fee_values.push(row.fee_rate == undefined ? "NULL" : "'" + this._percent2Num(row.fee_rate.trim()) + "'");
				t_fund_product_fee_values.push(row.fixed_fee == undefined ? "NULL" : "'" + row.fixed_fee.trim() + "'");
				t_fund_product_fee_values.push("'" + row.remark.trim().split(" ")[0] + "'");
				t_fund_product_fee_values.push("'" + row.remark.trim().split(" ")[1] + "'");
				t_fund_product_fee_values.push("NOW()");
				t_fund_product_fee_values.push("NOW()");
				t_fund_product_fee_values.push("'" + indexNo++ + "'");

				sql = sql + t_fund_product_fee_values.join(",") + ")";
				valueArr.push(sql);

			}

			return {
				sql: valueArr.join(";")+";",
				rowNo: rowNo
			}

		},

		_percent2Num: function(num) {
			if(/%/.test(num)) {
				num = num.replace("%", "");
				var arr = num.split(".");

				if(arr[0].length == 1) {
					return "0.0" + num.replace(".", "");
				}

				if(arr[0].length == 2) {
					return "0." + num.replace(".", "");
				}

				if(arr[0].length > 2) {
					return arr[0].substr(0, arr[0].length - 2) + "." + arr[0].substr(-2) + arr[1];
				}
			}
			return num;

		},
		_Str2Num: function(num) {
			if(/万/.test(num)) {
				num = num.replace("万", "");
				return num + "0000";
			}
			return num;

		}

	};

	return method;

});