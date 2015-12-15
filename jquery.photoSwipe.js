(function ($) {
    $.fn.photoSwipe = function (options) {
        var settings = $.extend({
            minWidth: 480,
            minHeight: 120,
            bgOpacity: 0.96,
            history: false,
            className: "lightbox",
            galleryUID: 1,
            getThumbBoundsFn: function (index) {
                var $el = $($.fn.photoSwipe.items[index].el);
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
        $.fn.photoSwipe.items = [];
        this.filter("img[src]").load(function () {
            var $this = $(this);
            var item = {
                src: $this.attr("src"),
                w: parseInt($this.prop("naturalWidth")),//Math.max(parseInt($this.prop("naturalWidth")), parseInt($this.attr("width"))),
                h: parseInt($this.prop("naturalHeight")),//Math.max(parseInt($this.prop("naturalHeight")), parseInt($this.attr("height"))),
                title: $this.attr("alt"),
                el: this,
                i: parseInt($this.attr("data-i"))
            };
            if (item.w > settings.minWidth && item.h > settings.minHeight) {
                //Thêm những ảnh có chiều rộng lớn hơn 480px
                $.fn.photoSwipe.items.push(item);
                $.fn.photoSwipe.items.sort(function (a, b) { return parseFloat(a.i) - parseFloat(b.i); });
                

                $this.addClass("lightbox");

                $this.click(function (e) {

                    var idx = 0;
                    $.each($.fn.photoSwipe.items, function (i, o) {
                        if (o.src == $this.attr("src")) {
                            idx=i;
                        }
                    });//Lấy index của ảnh đã được load trong array không tính ảnh chưa được load hoặc ảnh hỏng

                    var options = {
                        history: settings.history,
                        bgOpacity: settings.bgOpacity,
                        galleryUID: settings.galleryUID,
                        index: idx, // start at index
                        getThumbBoundsFn: settings.getThumbBoundsFn

                    };
                    // Initializes and opens PhotoSwipe
                    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, $.fn.photoSwipe.items, options);
                    gallery.init();
                    e.preventDefault();

                    console.log(idx);
                    console.log($.fn.photoSwipe.items);
                });
            }
            //console.log(item);
            //console.log([parseInt($this.prop("naturalWidth")), parseInt($this.attr("width")), $this.width()]);
            //console.log([parseInt($this.prop("naturalHeight")), parseInt($this.attr("height")), $this.height()]);
        }).each(function (i) { $(this).attr("data-i", i);/*Đánh dấu thứ tự ảnh*/ if (this.complete) $(this).load(); console.log("reload"); });
        return this;
    };
}(jQuery));
/*
    $(selector).photoSwipe();
*/
