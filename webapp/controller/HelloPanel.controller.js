sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  (Controller, MessageToast, Fragment) => {
    "use strict"; //To detect coding issues
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
        // read msg from i18n model
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
        let sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        let sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // show message
        MessageToast.show(sMsg);
      },
      onOpenDialog : function () {

        this.getOwnerComponent().openHelloDialog();
        //Below code passed to the HelloDialog.js for reuse
        /*var oView = this.getView();

        // create dialog lazily
        if (!this.pDialog) {
            this.pDialog = Fragment.load({
                id: oView.getId(),
                name: "sap.ui.demo.walkthrough.view.HelloDialog",
                controller: this   //pass a controller object to the Fragment.load API for callback
            }).then( (oDialog) => {
                // connect dialog to the root view of this component (models, lifecycle)
                oView.addDependent(oDialog);
                return oDialog;
            });
        } 
        this.pDialog.then(function(oDialog) {
            oDialog.open();
        });
        */
    }/*,
		onCloseDialog : function () {
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}*/
    });
  }
);
