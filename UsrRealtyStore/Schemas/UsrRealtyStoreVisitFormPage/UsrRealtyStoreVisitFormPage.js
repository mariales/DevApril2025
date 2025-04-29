define("UsrRealtyStoreVisitFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_phhyzg7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyStoreVisitDS_UsrVisitDateTime_bio36yf",
					"labelPosition": "above",
					"control": "$UsrRealtyStoreVisitDS_UsrVisitDateTime_bio36yf"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_y4nl116",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyStoreVisitDS_UsrPotentialCustomer_ikss9yz",
					"labelPosition": "above",
					"control": "$UsrRealtyStoreVisitDS_UsrPotentialCustomer_ikss9yz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_a7eg6xs",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_a7eg6xs_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_y4nl116",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ehubctg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyStoreVisitDS_UsrOwner_qswaptd",
					"labelPosition": "above",
					"control": "$UsrRealtyStoreVisitDS_UsrOwner_qswaptd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_3dwwhka",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3dwwhka_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ehubctg",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_z75kkqm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyStoreVisitDS_UsrComment_z14gl6c",
					"labelPosition": "above",
					"control": "$UsrRealtyStoreVisitDS_UsrComment_z14gl6c"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyStoreVisitDS_UsrVisitDateTime_bio36yf": {
						"modelConfig": {
							"path": "UsrRealtyStoreVisitDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyStoreVisitDS_UsrPotentialCustomer_ikss9yz": {
						"modelConfig": {
							"path": "UsrRealtyStoreVisitDS.UsrPotentialCustomer"
						}
					},
					"UsrRealtyStoreVisitDS_UsrComment_z14gl6c": {
						"modelConfig": {
							"path": "UsrRealtyStoreVisitDS.UsrComment"
						}
					},
					"UsrRealtyStoreVisitDS_UsrOwner_qswaptd": {
						"modelConfig": {
							"path": "UsrRealtyStoreVisitDS.UsrOwner"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyStoreVisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyStoreVisit"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyStoreVisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});