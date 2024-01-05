sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("filterexample.controller.View1", {
		onInit: function() {
			var dummyData = {data :[{
				Id: "AB101",
				Production: "100",
				Profit: "200",
				Loss: "0",
				Price: "20"
			}, {
				Id: "AB102",
				Production: "10",
				Profit: "2000",
				Loss: "0",
				Price: "2090"
			}, {
				Id: "AB103",
				Production: "9",
				Profit: "900",
				Loss: "0",
				Price: "300"
			}, {
				Id: "AB104",
				Production: "100",
				Profit: "200",
				Loss: "0",
				Price: "20"
			}, {
				Id: "AB105",
				Production: "100",
				Profit: "0",
				Loss: "200",
				Price: "20"
			}]};
			var jsonModel = new sap.ui.model.json.JSONModel();
			jsonModel.setData(dummyData);
			this.getView().setModel(jsonModel);
		}, 
		handleSearch: function()
		{
			var value = this.getView().byId("searchId").getValue();
			var tableObj = this.getView().byId("tableId");
			console.log(tableObj);
			
			if(value)
			{
				var filter = [new Filter("Production", FilterOperator.Contains, value)];
				tableObj.getBinding("items").filter(filter);
			}
			else
			{
				tableObj.getBinding("items").filter(filter);
			}
		},
		handleColor: function(uValue)
		{
			if(uValue <= 0)
			{
				return "Error";
			}
			else
			{
				return "Success";
			}
		}, 
		handleLoss: function(pvalue)
		{
			if(pvalue <= 0)
			{
				return "Success";
			}
			else
			{
				return "Error";
			}
		
		},
		handleApprove: function()
		{
			alert("Approved");
		},
		handleButton: function()
		{
			var value = this.getView().byId("tableId").getSelectedItems();
			console.log(value);
			if(value.length === 0 )			
			{
				 this.getView().byId("btn").setEnabled(false);
			}
			else
			{
				 this.getView().byId("btn").setEnabled(true);
			}
		}
	});
});