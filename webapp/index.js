sap.ui.define([
    "sap/m/Text"
    //'require',
    //'dependency'
//], function(require, factory) {
], function(Text) {
    'use strict';

    new Text({
        text : 'Hello UI5'
    }).placeAt('content')
    //alert('UI5 is ready!')
});