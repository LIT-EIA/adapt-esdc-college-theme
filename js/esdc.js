define(function (require) {

  var Adapt = require('coreJS/adapt');
  var Backbone = require('backbone');
  var ThemeBlock = require('theme/adapt-contrib-vanilla/js/theme-block');

  // Block View
  // ==========

  Adapt.on('componentView:postRender', function (view) {
    var parentBlock = this.blocks._byAdaptID[view.model.get('_parentId')][0];

    if (window && window.innerWidth > 765) {
      if (view.model.get('_layout') === 'left') {
        var widthPercentage = parentBlock.get('componentWidthRatio');
        view.$el.css('width', `${widthPercentage}%`);
      }
      else if (view.model.get('_layout') === 'right') {
        var widthPercentage = 100 - parseInt(parentBlock.get('componentWidthRatio'));
        view.$el.css('width', `${widthPercentage}%`);
      }
    }
    else {
      if (view.model.get('_layout') === 'left' || view.model.get('_layout') === 'right') {
        view.$el.css('width', `${100}%`);
      }
    }
  });

  Adapt.on('blockView:postRender', function (view) {
    var theme = view.model.get('_theme');

    if (theme) {
      new ThemeBlock({
        model: new Backbone.Model({
          _themeBlockConfig: theme
        }),
        el: view.$el
      });
    }

    //manage blocks

    var $blocks = $('.block');
    var isGray = false;

    for (var i = 0; i < $blocks.length; i++) {

      var $block = $($blocks[i]);

      $block.removeClass('bg-white bg-gray');

      // Combine block inherits previous color
      if ($block.hasClass('combineblock') && i > 0) {

        var inheritedColor = isGray ? 'bg-white' : 'bg-gray';

        $block.addClass(inheritedColor);

        continue;
      }

      var colorClass = isGray ? 'bg-gray' : 'bg-white';

      $block.addClass(colorClass);

      isGray = !isGray;
    }

  });
  Adapt.on('menuView:postRender', function (view) {
    const $menuHeader = view.$el.find('.menu-header');
    if (!$menuHeader.length) return;
    if ($menuHeader.find('.custom-svg-wrapper').length) return;
    const svg = `
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
  <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
  </defs>
  <g class="parallax">
    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" class="waveone" />
    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" class="wavetwo" />
  </g>
</svg>
  `;
    $menuHeader.append(svg);
  });

    Adapt.on('pageView:postRender', function (view) {
    const $pageHeader = view.$el.find('.page-header');
    if (!$pageHeader.length) return;
    if ($pageHeader.find('.custom-svg-wrapper').length) return;
    const svg = `
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
  <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
  </defs>
  <g class="parallax">
    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" class="waveone" />
    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" class="wavetwo" />
  </g>
</svg>
  `;
    $pageHeader.append(svg);
  });



});

