sap.ui.define([
    "sap/ui/core/mvc/XMLView"
    //"sap/m/Text"
    //'require',
    //'dependency'
//], function(require, factory) {
], async (XMLView) => {
    'use strict';

    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }
    ).then((oView) => {
        oView.placeAt("content");
    });
    /*
    new Text({
        text : 'Hello UI5'
    }).placeAt('content')
    alert('UI5 is ready!')
    */
});