# College@ESDC's official Adapt theme!

## Word doc colors

| Color Name | Hex | Header level |
| :------------- | :------------- | :------------- |
|Near black|![#051c37](https://via.placeholder.com/15/051c37/051c37.png) `#051c37`| Header level 1 |
|Cyan|![#1f7c9b](https://via.placeholder.com/15/1f7c9b/1f7c9b.png) `#1f7c9b`| Header level 2 |
|Purple|![#69459c](https://via.placeholder.com/15/69459c/69459c.png) `#69459c`| Header level 3 |
|Pink|![#cd1c69](https://via.placeholder.com/15/cd1c69/cd1c69.png) `#cd1c69`| Header level 4 |
|Grey|![#666666](https://via.placeholder.com/15/666666/666666.png) `#666666`| Header level 5 |

## ESDC Theme Colors:

| Color Name | Hex | Variable name |
| :------------- | :------------- | :------------- |
|Main blue color|![#26374A](https://via.placeholder.com/15/26374A/26374A.png) `#26374A`| `@esdc-blue` |
|Accent blue|![#1C578A](https://via.placeholder.com/15/1C578A/1C578A.png) `#1C578A`| `@esdc-interactive-blue` |
|Accent blue hover|![#1C578A](https://via.placeholder.com/15/1C578A/1C578A.png) `#1C578A`| `@esdc-int-hover-color` |
|Bright highlights pink|![#CD1C6A](https://via.placeholder.com/15/CD1C6A/CD1C6A.png) `#CD1C6A`| `@esdc-pink` |
|Lesser highlights purple|![#69459C](https://via.placeholder.com/15/69459C/69459C.png) `#69459C`| `@esdc-purple` |
|Background alternate|![#E6E6E6](https://via.placeholder.com/15/E6E6E6/E6E6E6.png) `#E6E6E6`| `@esdc-lightgrey` |
|White|![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) `#FFFFFF`| `@esdc-white` |
|White Hover|![#DEDEDE](https://via.placeholder.com/15/DEDEDE/DEDEDE.png) `#DEDEDE`| `@esdc-white-hover` |
|Black|![#000000](https://via.placeholder.com/15/000000/000000.png) `#000000`| `@esdc-black` |
|Correct color|![#56cdb0](https://via.placeholder.com/15/56cdb0/56cdb0.png) `#56cdb0`| `@esdc-correct` |
|Incorrect color|![#CD1C6A](https://via.placeholder.com/15/CD1C6A/CD1C6A.png) `#CD1C6A`| `@esdc-incorrect` |

## Settings overview

Unlike most Adapt plug-ins, the **Vanilla** theme has no attributes that are required to be configured in the course JSON files. There is, however, an option to alter the background color of blocks as desired. Configure the attributes highlighted below in *blocks.json*. These attributes are properly formatted as JSON in [*example.json*](https://github.com/adaptlearning/adapt-contrib-vanilla/blob/master/example.json).

#### **blocks.json**
**_theme** (object): The theme attributes group contains attributes that override those set in **Vanilla**. These include **_backgroundColor**, **_minimumHeights**, and **_isDividerBlock**.

>**_backgroundColor** (string): This value is the name of a color variable that has been defined in  *less/colors.less*. Omit the initial `@` that is a part of the variable declaration. For example, an acceptable value is `"background-color-inverted"`.  

>**_minimumHeights** (object): The minimum heights attribute group specifies the minimum height of the block at different device widths (`_large`, `_medium`, and `_small`).   

>>**_large** (number): This value specifies the CSS minimum height when `Adapt.device.screenSize'` evaluates to `"_large"`.  
        
>>**_medium** (number): This value specifies the CSS minimum height when `Adapt.device.screenSize'` evaluates to `"_medium"`.   
        
>>**_small** (number): This value specifies the CSS minimum height when `Adapt.device.screenSize'` evaluates to `"_small"`.   
 
>**_isDividerBlock** (boolean): - Determines whether the CSS class `divider-block` *(less/src/theme-extras.less)* will be applied. Acceptable values are `true` and `false`.

Visit the [**Vanilla** wiki](https://github.com/adaptlearning/adapt-contrib-vanilla/wiki) for more information about how to use and manipulate the theme.  

## Structure  

| Folder/File         | Description  |
| :-------------      |:-------------|
| 📄 theme.json        | Pixel values for `screenSize`(`small`, `medium`, and `large`)|
| 📄 selection.json    | File used for selecting icons at [IcoMoon.io](https://icomoon.io/) that are packaged in fonts/vanilla.* |
| 📁 assets            | Location of theme assets (for example: images, loading gif, etc.)|
| 📁 fonts             | Location of any theme font files |
| 📁 js                | JavaScript files on which the theme depends      |
| 📁 less              | Location of any [LESS](http://lesscss.org/) based CSS files |
| 📄 less/generic.less | Variables that are not covered by those defined in colors.less, fonts.less, and paddings.less   |
| 📁 less/src          | Location of LESS files for various Adapt elements |
| 📄 less/src/theme-extras.less| Classes used for bespoke styling |
| 📁 templates         | Location of overridden HTML (.hbs) templates |
| 📁 templates/partials| Location of overridden HTML (.hbs) templates required by other templates, specifically buttons.hbs, component.hbs, and state.hbs |  

## Templates

**adapt-contrib-esdc-college-theme** supports customisation for the rendering of various Adapt elements through the use of [Handlebars](http://handlebarsjs.com/) templates.  The file name of the template indicates the element it affects. Among the available templates are:
* article.hbs
* block.hbs
* loading.hbs 
* navigation.hbs
* page.hbs
