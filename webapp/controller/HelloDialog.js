sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
  function (ManagedObject, Fragment) {
    "use strict";
    return ManagedObject.extend(
      "sap.ui.demo.walkthrough.controller.HelloDialog",
      {
        constructor: function (oView) {
          this._oView = oView;
        },

        exit: function () {
          delete this._oView;
        },

        open: function () {
            let oView = this._oView;

            
            // create dialog lazily
            if (!this.pDialog) {
                let oFragmentController = {
					onCloseDialog : function () {
						oView.byId("helloDialog").close();
					}
				};
                // load asynchronous XML fragment
                this.pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then( (oDialog) => {
                    // connect dialog to the root view of this component (models, lifecycle)
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            } 
            this.pDialog.then((oDialog) => {
                oDialog.open();
            });
        },
      }
    );
  }
);
