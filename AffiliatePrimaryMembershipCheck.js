// JavaScript source code
var req = new XMLHttpRequest();
req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/cobalt_memberships?$filter=_cobalt_membertypeid_value eq CA0B84B0-EF20-E111-B470-00155D000140 and  statecode eq eq and  _cobalt_accountid_value eq  and  ramcosub_subclass eq eq or  ramcosub_subclass eq eq or  ramcosub_subclass eq eq or  ramcosub_subclass eq eq or  ramcosub_subclass eq eq or  ramcosub_subclass eq eq", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function () {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var results = JSON.parse(this.response);
            for (var i = 0; i < results.value.length; i++) {
                var cobalt_membershipid = results.value[i]["cobalt_membershipid"];
                function checkMemberValue(executionContext) {
                    var formContext = executionContext.getFormContext();
                    var memberValue = formContext.getAttribute("cobalt_membershipid").getValue();

                    if (memberValue === null || memberValue === "" || memberValue === undefined) {
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