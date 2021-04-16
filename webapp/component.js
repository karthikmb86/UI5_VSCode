sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
  ],
  function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      //metadata
      metadata: {
        /*"rootView": {  //Moved to manifest.json
               "viewName": "sap.ui.demo.walkthrough.view.App",
               "type": "XML",
               "async": true,
               "id": "app"
            }*/
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        let oData = {
          recipient: {
            name: "World",
          },
        };
        let oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());

        // set i18n model     //Moved to manifest.json
        /*var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
            supportedLocales: [""],
            fallbackLocale: ""
         });
         this.setModel(i18nModel, "i18n");
         */
      },
      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      openHelloDialog: function () {
        this._helloDialog.open();
      },
    });
  }
);
