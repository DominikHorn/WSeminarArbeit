(function ($)
{
    var methods = {
        init: function (options)
        {
            $this = $(this);
            var opts = $.extend(
            {}, $.fn.emodal.defaults, options);
            return this.each(function ()
            {
                $(this).addClass('emodal').data('emodal', opts).click(function ()
                {
                    $(this).emodal('show');
                    return false;
                });
            });
        },
        close: function ()
        {
            $this = $('.eModal-Opened');
            var opts = $this.data('emodal');
            $('#'+opts.containerId).fadeOut(function ()
            {
                $(this).remove();
                $('#'+opts.overlayId).fadeOut(function ()
                {
                    $(this).remove();
                })
            })
            $('html').removeAttr('style').attr('style', $('html').data('htmlStyles'))
            $('body').removeAttr('style').attr('style', $('body').data('bodyStyles'))
			$this.removeClass('eModal-Opened')
            return this;
        },
        show: function ()
        {
            $this = $(this).addClass('eModal-Opened');
            var opts = $this.data('emodal');
			
            opts.maxHeight = $(window).height() * .85;
            opts.maxWidth = $(window).width() * .9;
			
            var theme = themes[opts.theme];
            $('html').data('htmlStyles', $('html').attr('style') || '');
            $('body').data('bodyStyles', $('body').attr('style') || '');
			$('html,body')
				.css(
				{
					width: '100%',
					height: '100%'
				});

            var overlay = $('<div>')
				.attr('id',opts.overlayId)
				.css(
				{
					backgroundColor: theme.overlayColor,
					opacity: theme.overlayOpacity / 100
				})
				.appendTo('body')
				.fadeIn()
				.click(function ()
				{
					if (opts.overlayClose)
					{
						modal_is_open = false;
						container.emodal('close');
					}
				})
				
            var container = $('<div>')
				.attr('id',opts.containerId)
				.css(
				{
					backgroundColor: theme.containerBgColor,
					padding: theme.containerPadding + 'px',
					border: theme.containerBorderColor + ' ' + theme.containerBorderStyle + ' ' + theme.containerBorderWidth + 'px',
					"-moz-border-radius": theme.containerBorderRadius + 'px',
					"-webkit-border-radius": theme.containerBorderRadius + 'px',
					"border-radius": theme.containerBorderRadius + 'px'
				})
				.hide()
				.appendTo('body');
				
            var content = $('<div>')
				.attr('id',opts.contentId)
				.css(
				{
					color: theme.contentFontColor
				})
				.appendTo(container);
            var controls = $('<div>')
				.attr('id', opts.controlsId)
				.prependTo(container);
				
            var val = theme.closeSize;
            var top, bottom, left, right = 'auto';
            switch (theme.closePosition)
            {
            case 'topright':
                top = -(val / 2) + 'px';
                right = -(val / 2) + 'px';
                break;
            case 'topleft':
                top = -(val / 2) + 'px';
                left = -(val / 2) + 'px';
                break;
            case 'bottomright':
                bottom = -(val / 2) + 'px';
                right = -(val / 2) + 'px';
                break;
            case 'bottomleft':
                bottom = -(val / 2) + 'px';
                left = -(val / 2) + 'px';
                break;
            }
            var closeLink = $('<a>')
				.attr('id', opts.closeId)
				.text('x')
				.click(function ()
				{
					modal_is_open = false;
					$this.emodal('close');
				})
				.css(
				{
					left: left,
					right: right,
					top: top,
					bottom: bottom,
					height: theme.closeSize + 'px',
					width: theme.closeSize + 'px',
					backgroundColor: theme.closeBgColor,
					border: '2px solid #FFFFFF',
					//border:theme.closeBorderColor+' '+theme.closeBorderStyle+' '+theme.closerBorderWidth+'px',
					"-moz-border-radius": theme.closeBorderRadius + 'px',
					"-webkit-border-radius": theme.closeBorderRadius + 'px',
					"border-radius": theme.closeBorderRadius + 'px',
					color: theme.closeFontColor,
					fontSize: theme.closeFontSize
				})
				.appendTo(controls);
				
            if (opts.type === 'Image')
            {
                container.css(
                {
                    maxWidth: opts.maxWidth,
                    maxHeight: opts.maxHeight
                });
                var abcs = $("a.eModal-Image")
                var prevButton = $('<a>')
					.attr('id',opts.prevId)
					.click(function (){
                    var current = $('.eModal-Opened')
					var prev = abcs.eq(abcs.index(current) - 1)
					current.removeClass('eModal-Opened')
                    if (prev.length <= 0) prev = abcs.eq(abcs.length)
					prev.addClass('eModal-Opened')
					container
						.animate({opacity: '.01'}, function (){
							var img = $("<img/>")
								.attr('src', prev.attr('href'))
								.css({
									maxWidth: '100%',
									maxHeight: '100%'
								})
								.load(function (){
									if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0)
									{
										alert('broken image!')
									}
									else
									{
										if (this.naturalWidth > opts.maxWidth) img.attr('width', opts.maxWidth)
										if (this.naturalHeight > opts.maxHeight) img.attr('height', opts.maxHeight)
										content
											.html(img)
											.css({opacity:'.01'})
										
										container
											.emodal('center')
											.animate({opacity:'.01'})
											.animate({opacity:'1'})
											
										content.animate({opacity: '1'})
									}
								})
						})
                    return false
                })
                var nextButton = $('<a>')
					.attr('id',opts.nextId)
					.click(function (){
						var current = $('.eModal-Opened')
						var next = abcs.eq(abcs.index(current) + 1)
						current.removeClass('eModal-Opened')
						if (next.length == 0) next = abcs.eq(0)
						next.addClass('eModal-Opened')
						container
							.animate({opacity: '.01'}, function (){
								var img = $("<img/>")
									.attr('src', next.attr('href'))
									.css({
										maxWidth: '100%',
										maxHeight: '100%'
									})
									.load(function (){
										if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0)
										{
											alert('broken image!')
										}
										else
										{
											if (this.naturalWidth > opts.maxWidth) img.attr('width', opts.maxWidth)
											if (this.naturalHeight > opts.maxHeight) img.attr('height', opts.maxHeight)
											content
												.html(img)
												.css({opacity:'.01'})
											
											container
												.emodal('center')
												.animate({opacity:'.01'})
												.animate({opacity:'1'})
												
											content.animate({opacity: '1'})
										}
									})
							})
						return false
					})
				var buttons = $('<div>')
					.attr('id',opts.buttonsId)
					.append(prevButton, nextButton)
					.appendTo(container)
            }
            if (opts.type === 'Link'){
                opts.requestData.url = $(this).attr('href')
                opts.requestData.iframeWidth = opts.maxWidth
                opts.requestData.iframeHeight = opts.maxHeight
            }
            var loaded = false
            if (opts.url != null){
                if (opts.type === 'Image'){
                    var img = $("<img/>")
						.attr('src', opts.url)
						.css({
							maxWidth: '100%',
							maxHeight: '100%'
						})
						.load(function (){
							if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0)								alert('broken image!')
							else {
								if (this.naturalWidth > opts.maxWidth) img.attr('width', opts.maxWidth)
								if (this.naturalHeight > opts.maxHeight) img.attr('height', opts.maxHeight)
								content.append(img)
								loaded = true
							}
						})
                }
                else
                {
                    $.post(opts.url, opts.requestData, function (data){
                        var $data = $(data)
                        content.prepend(data)
                        container
							.show()
							.css({opacity: '.01'})
                        if(content.innerHeight() > opts.maxHeight && opts.type != 'Link') content.css({maxHeight: (opts.maxHeight - 60) + 'px'})
                        var title = content
							.find("#eModal-Title")
							.css({
								color: theme.contentTitleFontColor,
								fontFamily: theme.contentTitleFontFamily,
								fontSize: theme.contentTitleFontSize + 'px'
							})
                        if(title) title.attr('title', title.text()).appendTo(controls)
                        opts.onLoad()
                        if(opts.cf7form == true) loadCf7()
                        loaded = true
                    })
                }
            }

            function showme(){
                if (loaded === true){
                    return $this.each(function (){
                        container
							.show()
							.css({opacity: '.01'})
							.emodal('center')
							.animate({opacity: '.01'})
							.animate({opacity: '1'})

						var resizeTimer1, resizeTimer2

                        $(window)
							.resize(function (){
								clearTimeout(resizeTimer1)
								if ($('.eModal-Opened').length>0){
									resizeTimer1 = setTimeout(function (){
										content
											.css({maxHeight: ($(window).width() * .9 - 60) + 'px'})
										container
											.emodal('center', true)
									}, 200)
								}
							})
							.scroll(function (){
								clearTimeout(resizeTimer2)
								if ($('.eModal-Opened').length>0){
									resizeTimer2 = setTimeout(function (){
										container
											.emodal('center',true)
									}, 200)
								}
							})
                    })
                }
                setTimeout(showme, 200)
                return
            }
            showme()
        },
        center: function (animate)
        {
            $this = $('.eModal-Opened');
			var opts = $this.data('emodal');
		
		    var container = $('#'+opts.containerId);
            setTimeout(function ()
            {
                var top = ($(window).height() - $(container).outerHeight()) / 2;
                var left = ($(window).width() - $(container).outerWidth()) / 2;
                if (animate == true)
                {
                    $(container).stop().animate(
                    {
                        'top': top + $(document).scrollTop(),
                        'left': left
                    });
                }
                else
                {
                    $(container).css(
                    {
                        'top': top + $(document).scrollTop(),
                        'left': left
                    });
                }
            }, 200);
            return this;
        }
    };
    var loadCf7 = function ()
        {
            $('div.wpcf7 > form').ajaxForm(
            {
                beforeSubmit: function (formData, jqForm, options)
                {
                    jqForm.wpcf7ClearResponseOutput();
                    jqForm.find('img.ajax-loader').css(
                    {
                        visibility: 'visible'
                    });
                    return true;
                },
                beforeSerialize: function (jqForm, options)
                {
                    jqForm.find('.wpcf7-use-title-as-watermark.watermark').each(function (i, n)
                    {
                        $(n).val('');
                    });
                    return true;
                },
                data: {
                    '_wpcf7_is_ajax_call': 1
                },
                dataType: 'json',
                success: function (data)
                {
                    var ro = $(data.into).find('div.wpcf7-response-output');
                    $(data.into).wpcf7ClearResponseOutput();
                    if (data.invalids)
                    {
                        $.each(data.invalids, function (i, n)
                        {
                            $(data.into).find(n.into).wpcf7NotValidTip(n.message);
                        });
                        ro.addClass('wpcf7-validation-errors');
                    }
                    if (data.captcha) $(data.into).wpcf7RefillCaptcha(data.captcha);
                    if (data.quiz) $(data.into).wpcf7RefillQuiz(data.quiz);
                    if (1 == data.spam) ro.addClass('wpcf7-spam-blocked');
                    if (1 == data.mailSent)
                    {
                        $(data.into).find('form').resetForm().clearForm();
                        ro.addClass('wpcf7-mail-sent-ok');
                        if (data.onSentOk) $.each(data.onSentOk, function (i, n)
                        {
                            eval(n)
                        });
                        modal_is_open = false;
                        $(this).emodal('close');
                    }
                    else
                    {
                        ro.addClass('wpcf7-mail-sent-ng');
                    }
                    if (data.onSubmit) $.each(data.onSubmit, function (i, n)
                    {
                        eval(n)
                    });
                    $(data.into).find('.wpcf7-use-title-as-watermark.watermark').each(function (i, n)
                    {
                        $(n).val($(n).attr('title'));
                    });
                    ro.append(data.message).slideDown('fast');
                }
            });
        };
		
    var loadCcf = function ()
        {
			var action = $('[name=form_page]').parents('.customcontactform').attr('action');
			$('[name=form_page]').val(action)
			$('<a></a>')
				.addClass('ccf-popover-close')
				.html('[close]')
				.prependTo('.ccf-popover');
			$('.ccf-popover').css({'padding' : '10px 14px 10px 10px'});
			$("a#in").click(function(){
				var sel = ".ccf-popover" + cid;
				$(".ccf-popover1").fadeIn();
		
			});
			$(".ccf-popover-close").click(function(){
				$(".ccf-popover").hide();
			});
			$('.show-field-instructions').click(function() {
															  
			});
			
			$(".ccf-tooltip-field").tooltip({
				position: "center right",
				offset: [-2, 10],
				effect: "fade",
				opacity: 0.7,
				tipClass: 'ccf-tooltip'
			
			});
			
			$("#ccf-form-success").delay(500).fadeIn('slow');
			$("#ccf-form-success .close").click(function() {
				$("#ccf-form-success").fadeOut();											  
			});
        };

    $.fn.emodal = function (method)
    {
        // Method calling logic
        if (methods[method])
        {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method)
        {
            return methods.init.apply(this, arguments);
        }
        else
        {
            $.error('Method ' + method + ' does not exist on jQuery.emodal');
        }
    };
    $.fn.emodal.defaults = {
		overlayId: 'eModal-Overlay',
		containerId: 'eModal-Container',
		contentId: 'eModal-Content',
		controlsId: 'eModal-Controls',
		closeId: 'eModal-Close',
		prevId: 'eModal-Previous',
		nextId: 'eModal-Next',
		buttonsId: "eModal-Buttons",
		imgId: 'eModal-Img',
        url: easymodal.ajaxurl,
        piePath: easymodal.piePath,
        requestData: {},
        theme: '1',
        onLoad: function ()
        {},
        type: null,
        maxHeight: $(window).height() * .85,
        maxWidth: $(window).width() * .9,
        overlayClose: false
    };

    var themes = easymodal.themes;
    $(document).ready(function ()
    {
        jQuery.fn.isChildOf = function (b)
        {
            return (this.parents(b).length > 0);
        };
        $.fn.hasAttr = function (name)
        {
            return this.attr(name) !== undefined;
        };
        // Creating custom :external selector
        $.expr[':'].external = function (obj)
        {
            return !obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname);
        };

        $('.eModal').each(function ()
        {
            var classes = $(this).attr("class").split(" ");
            for (var i = 0; i < classes.length; i++)
            {
                if (classes[i].substr(0, 7) == "eModal-")
                {
                    var modalId = classes[i].split("-")[1];
                    break;
                }
            }
            $(this).emodal(easymodal.modals[modalId]);
        })

/*        $('a:external').addClass('external eModal-Link').emodal(easymodal.modals['Link']);


        $('a[href$=".gif"], a[href$=".jpg"], a[href$=".png"], a[href$=".bmp"]').children('img').each(function ()
        {
            var anch = $(this).parents('a').addClass('eModal-Image');
            var url = $(anch).attr('href');
            $(anch).emodal(
            {
                url: url,
                theme: '1',
                type: 'Image'
            });
        });*/
    })

})(jQuery);