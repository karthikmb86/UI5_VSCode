sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict"; //To detect coding issues
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      //on show hello function is now moved to the nested HelloPanel controller
      onOpenDialog : function () {
        this.getOwnerComponent().openHelloDialog();
      }
    });
  }
);
