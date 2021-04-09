/*
 * Nivo Lightbox v1.3.1
 * http://dev7studios.com/nivo-lightbox
 *
 * Copyright 2013, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

;
(function($, window, document, undefined) {

    var pluginName = 'nivoLightbox',
        defaults = {
            effect: 'fade',
            theme: 'default',
            keyboardNav: true,
            clickImgToClose: false,
            clickOverlayToClose: true,
            onInit: function() {},
            beforeShowLightbox: function() {},
            afterShowLightbox: function(lightbox) {},
            beforeHideLightbox: function() {},
            afterHideLightbox: function() {},
            beforePrev: function(element) {},
            onPrev: function(element) {},
            beforeNext: function(element) {},
            onNext: function(element) {},
            errorMessage: 'The requested content cannot be loaded. Please try again later.'
        };


    NivoLightbox.prototype = {

        init: function() {

        },

        showLightbox: function(e) {

        },

        checkContent: function(link) {

        },

        processContent: function(content, link) {

        },

    };

    $.fn[pluginName] = function(options) {
        return this.each(function() {});
    };

})(jQuery, window, document);