(function ($) {
    $.fn.photoSwipe = function (options) {
        var settings = $.extend({
            minWidth: 480,
            minHeight: 120,
            bgOpacity: 0.96,
            history: false,
            className: "lightbox",
            galleryUID:1,
            getThumbBoundsFn: function (index) {
                var $el = $(items[index].el);
                return { x: $el.offset().left, y: $el.offset().top, w: $el.width() };
            }
        }, options);

        var $pswpe = $(".pswp");
        if ($pswpe.length < 1) {
            $pswpe = $('<div class="pswp" tabindex=-1 role=dialog aria-hidden=true><div class=pswp__bg></div><div class=pswp__scroll-wrap><div class=pswp__container><div class=pswp__item></div><div class=pswp__item></div><div class=pswp__item></div></div><div class="pswp__ui pswp__ui--hidden"><div class=pswp__top-bar><div class=pswp__counter></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title=Share></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class=pswp__preloader><div class=pswp__preloader__icn><div class=pswp__preloader__cut><div class=pswp__preloader__donut></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class=pswp__share-tooltip></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class=pswp__caption><div class=pswp__caption__center></div></div></div></div></div>');
            $("body").append($pswpe);
        }
        var pswpElement = $pswpe[0];

        // build items array
        var items = [];
        this.filter("img[src]").load(function () {
            var $this = $(this);
            var item = {
                src: $this.attr("src"),
                w: parseInt($this.prop("naturalWidth")),//Math.max(parseInt($this.prop("naturalWidth")), parseInt($this.attr("width"))),
                h: parseInt($this.prop("naturalHeight")),//Math.max(parseInt($this.prop("naturalHeight")), parseInt($this.attr("height"))),
                title: $this.attr("alt"),
                el: this
            };
            if (item.w > settings.minWidth && item.h > settings.minHeight) {
                //Thêm những ảnh có chiều rộng lớn hơn 480px
                items.push(item);
                $this.addClass("lightbox");
                $this.click({ idx: items.length - 1 }, function (e) {
                    var options = {
                        history: settings.history,
                        bgOpacity: settings.bgOpacity,
                        galleryUID:settings.galleryUID,
                        index: e.data.idx, // start at index
                        getThumbBoundsFn: settings.getThumbBoundsFn

                    };
                    // Initializes and opens PhotoSwipe
                    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                    gallery.init();
                    e.preventDefault();
                });

            }
            //console.log(item);
            //console.log([parseInt($this.prop("naturalWidth")), parseInt($this.attr("width")), $this.width()]);
            //console.log([parseInt($this.prop("naturalHeight")), parseInt($this.attr("height")), $this.height()]);
        }).each(function () { if (this.complete) $(this).load(); console.log("reload"); });

        return this;
    };
}(jQuery));
/*
    $(selector).photoSwipe();
*/
