({
  doInit : function(component, event, helper) {
        var siteValue = '農業';
    //問い合わせ分類2をAPEXから取得
    var action = component.get("c.getAccounts");
    action.setParams({
      'site' : siteValue
    });

    action.setCallback(this, function(response){
      var state = response.getState();
      if (component.isValid() && state === "SUCCESS") {
        var type2List = response.getReturnValue();
                component.set("v.accounts", type2List);
      }
    });
    $A.enqueueAction(action);
  }
})