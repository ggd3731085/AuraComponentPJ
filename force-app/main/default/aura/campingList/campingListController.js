/*({
    clickCreateItem: function (component, event, helper) {
        var isFormValid = component.find("campingItemForm").reduce(function (isValid, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return isValid && inputCmp.get("v.validity").valid;
        });

        if (isFormValid) {
            var newCampingItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
            console.log(JSON.parse(JSON.stringify(newCampingItem)), JSON.stringify(newCampingItem));
            var campingItems = JSON.parse(JSON.stringify(component.get("v.items")));
            campingItems.push(newCampingItem);
            component.set("v.items", campingItems);
            component.set("v.newItem", { 'Price__c': 0, 'Packed__c': false, 'Quantity__c': 0, 'Name': '', 'sobjectType': 'Camping_Item__c' });
        }
        component.set("v.newItem", {
            'sobjectType': 'Camping_Item__c',
            'Name': '',
            'Quantity__c': 0,
            'Price__c': 0,
            'Packed__c': false
        });
    }
})*/
({
	clickCreateItem : function(component, event, helper) {
        var isFormValid = component.find("campingItemForm").reduce(function(isValid, inputCmp){
        	inputCmp.showHelpMessageIfInvalid();    	
            return isValid && inputCmp.get("v.validity").valid;
        });
        
        if (isFormValid) {
            
            var newCampingItem = component.get("v.newItem");
            helper.createItem(component,newCampingItem);
           
        }
	},
    
    doInit : function (component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this,function (response) { 
        	var campingItems = response.getReturnValue();
            component.set("v.items",campingItems);
        });
        $A.enqueueAction(action);
    }
})