({
    doInit : function(component, event, helper) {
        component.set('v.columnslist', [
            {label: 'First Name', fieldName: 'FirstName', type: 'text'},
                {label: 'Last Name', fieldName: 'LastName', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
                {label: 'Email', fieldName: 'Email', type: 'email '}
            ]);
    },
    tableData:function(component,event,helper){
        var contact = event.getParam("ContactData");
        
        var arr = component.get("v.datalist");
        arr.push(contact);
        console.log(arr);
        component.set("v.datalist",arr);
    }
})