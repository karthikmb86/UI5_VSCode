sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict"; //To detect coding issues
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit: function () {
        // set data model on view
        let oData = {
          recipient: {
            name: "World",
          }
        };
        let oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      onShowHello: () => {
        MessageToast.show("Hello There");
        // show a native JavaScript alert
        //alert("Hello World from controller");
      },
    });
  }
);
