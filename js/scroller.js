/*global $, jQuery*/
(function ($) {
    'use strict';
    var Scroller = function (element, options) {
        var ele = $(element),
            obj = this,
            //merge options with default
            settings = $.extend({
                param: 'defaultValue'
            }, options || { }),
            console = (window.console = window.console || {}),

            //private method                
            pluginMethod = function () {
            // console.log('there is nothing inside private method');
                var eleScroll = ele.height(),
                    eleTop = (ele.offset().top) - ($('header .container-fluid').outerHeight());
                //console.log($('body').prop('scrollTop'));
                //ele.removeClass('active');

                if (ele.hasClass('active')) {
                    $('html, body').stop();
                    return void(0);
                    //return false;
                } else { ele.parent().find('section').removeClass('active');
                        //.promise().then(function () { console.log('donw'); });
                    $('html, body').animate({scrollTop: eleTop }, 1000, function () {
                        ele.addClass('active');
                    });
                    }
                    // $('body').animate({scrollTop: eleTop-eleHeight}, {duration:1000, easing: 'swing'});
            };
        
            //public method
        this.pageScroll = function () {
            pluginMethod();
            //console.log('Public Method Page scroll has been called');
        };
    };
    $.fn.scroller = function (options) {
        return this.each(function () {
            //exposing the objects of class
            var element = $(this), scroller;

            //check if already an instance created
            if (element.data('scroller')) { return; }

            //instantiating the class
            scroller = new Scroller(this, options);

            //storing plugin's object in element's data
            element.data('scroller', scroller);
            //console.log(element);                    
        });
    };
}(jQuery));