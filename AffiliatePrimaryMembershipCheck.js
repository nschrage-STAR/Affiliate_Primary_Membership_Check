// JavaScript source code
dubugger
var req = new XMLHttpRequest();
var formContext = executionContext.getFormContext();
var AccountGuid = formContext.data.entity.getId();
req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/cobalt_memberships?$filter=_ramco_officeid_value eq {AccountGuid} and (ramcosub_subclass eq 740300096 or ramcosub_subclass eq 740300033 or ramcosub_subclass eq 740300004 or ramcosub_subclass eq 740300005 or ramcosub_subclass eq 740300007) and statecode eq 0", true); req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function () {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var results = JSON.parse(this.response);
            if (results.value.length == 0) {
                alert("Primary Member value cannot be blank. Please enter a value.");
            }
                }

            }
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();

