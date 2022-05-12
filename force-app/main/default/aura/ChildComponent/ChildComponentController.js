({
    letsBegin : function(component, event, helper) {
        var cmpEvent = component.getEvent("ComponentEvent");

        cmpEvent.setParams({"ContactData" : component.get("v.contact")});
        cmpEvent.fire();
    }
})
