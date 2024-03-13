define(function(require) {
	
	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var ThemeBlock = require('theme/adapt-contrib-vanilla/js/theme-block');

	// Block View
	// ==========

  Adapt.on('componentView:postRender', function (view) {
    var parentBlock = this.blocks._byAdaptID[view.model.get('_parentId')][0];

    if (view.model.get('_layout') === 'left') {
      var widthPercentage = parentBlock.get('componentWidthRatio');
      view.$el.css('width', `${widthPercentage}%`);
    }
    else if (view.model.get('_layout') === 'right') {
      var widthPercentage = 100 - parseInt(parentBlock.get('componentWidthRatio'));
      view.$el.css('width', `${widthPercentage}%`);
    }
  });

	Adapt.on('blockView:postRender', function(view) {
		var theme = view.model.get('_theme');
		
		if (theme) {
			new ThemeBlock({
				model: new Backbone.Model({
					_themeBlockConfig: theme
				}),
				el: view.$el
			});
		}
	});
});
