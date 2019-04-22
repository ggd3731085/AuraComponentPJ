//({
//	packItem : function(component, event, helper) {
//		var objItem = component.get(v.item);
//        objItem.Packed__c=true;
//        component.set("v.item",objItem);
        
//        var btn1 = event.getSource();
//        document.getElementById(btn1.id).disabled =true;
//	}
//})
({
	packItem : function(component, event, helper) {
		component.set("v.item.Packed__c",true);
        
        event.getSource().set("v.disabled",true);
	}
})