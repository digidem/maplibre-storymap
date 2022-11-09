# Interactive Storytelling with MapLibre
Some stories are best told with a map. Data journalists covering changing conditions in a population's demographics, the environment, an international conflict, or telling a simple travel story frequently provide geographic context in their graphics.

This template is designed to accelerate building out a "scrollytelling" map story. The primary input is a story broken into sections (`chapters`), each hooked to a particular view of a map.

This template is based on Mapbox's storytelling template but has been customized to work with MapLibre instead. The template can be self-hosted with your own tiles, online or offline, either as static HTML or using Node. To work with gzipped vector tiles, you will need to use Node.

## Prerequisites
This template is for data journalists and digital storytellers of any kind. No coding experience is required. 

If you are planning to include some custom map layers, you will need some familiarity with the [MapLibre style specifications](https://maplibre.org/maplibre-gl-js-docs/style-spec/), or use [MapTiler](https://www.maptiler.com/) or [Maputnik](https://github.com/maputnik) to design your own style.

The template does not rely on any particular CSS framework or fonts. There are some basic styles in the `head` of the HTML file that can be changed, so feel free to adapt and add to these to match your site and story brand. You can place your own image assets in the `images/` directory.

## Getting Started

Download this repository as a ZIP file using the button above, and unzip it. If you are using `git`, clone this repository.

Make a copy of `config.js.template` and name it `config.js`. Open the new `config.js` file in your text editor.

#### Steps

1. **Prepare your map tiles and design a MapLibre style**. This template looks for a map `style.json` in the `map/` directory. You could also place all of your map assets (tiles, sprites, font glyphs) here. You could change this, however. 

   * To test out the template, you could use the [MapLibre demo tiles](https://github.com/maplibre/demotiles). Download the repo and place it in this directory, and change the paths for `fonts`, `sprites` and `sources` to your hosting path.

2. **Set the configuration options** as described in the next section. 

3. **Add as many `chapters` in your template as needed.** You'll need a `,` between each section, but no comma at the end. Here is what a `chapter` looks like:

4. **Fill out your sections as needed.**  Give each section a unique name in the section `id` property. This will become the HTML `div` `id`, so avoid spaces in the name. Set the `location` properties for each chapter. The `title`, `description` properties are optional. The `description` supports HTML tags. If you have an image that goes with that section of the story, add the path to the image in the `image` property.

5. **Figure out how you are hosting the template.** If you are deploying it as static HTML, simply place the files somewhere, open the `index.html` file in a browser, and voila! If you are deploying it with Node, you will need to run some additional steps, as listed in **Deployment** below.

#### Configuration Options

Note: items in bold are **required**.

**`style`**: This is the MapLibre style to use for the app. You can set this to any MapLibre style hosted online or locally, but by default it is set to look for a style in the `map/` directory.

**`showMarkers`**: This controls whether markers are shown at the centerpoint of each chapter. If `true`, the map will display a default blue, inverted-teardrop icon.

**`markerColor`**: Accepts hexadecimal, RGB, and color names [compatible with CSS standards](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). If `showMarkers` is `true`, this property will override the default light blue marker color.

**`inset`**: Shows an inset mini-map. Will be disabled is legend is set to true.

**`legend`**: Shows a box at the bottom right in which you can add HTML content for each chapter, serving as a legend. Will be disabled is inset is set to true.

**`theme`**: Two basic themes (light and dark) are available.

`use3dTerrain`: Enables 3D terrain. You will need to provide your own terrain tiles. See the [MapLibre GL JS 3D example](https://maplibre.org/maplibre-gl-js-docs/example/3d-terrain/) for reference. (Optional)

`useCustomLayers`: Enables adding custom sources and layers as defined in `sources.js`. 

`bookmarks`: Enables adding bookmark links in the header and footer for each chapter. Bookmarks will be added for any chapter that has a title.

`chapterReturn`: To enable a "Return to Top" link at the bottom of each chapter. 

`title`: The title of the overall story. (Optional)

`logo`: Add a logo image to the header of your story. (Optional)

`subtitle`: A subtitle for the story. (Optional)

`byline`: Credit the author of the story. (Optional)

`mobileview`: Displays a helpful note to rotate the device when viewing the story map on a mobile. This is HTML content and can be modified in `config.js`. (Optional) 

`footer`: Citations, credits, etc. that will be displayed at the bottom of the story.

**`chapters`**: This contains all of the story content and map controls for each section of the story. _Array of objects_

- **`id`**: A slug-style ID for the chapter. This is read by the JavaScript driving the app and is assigned as an HTML `id` for the `div` element containing the rest of the story. A best-practice format would be to use kebab case, like `my-story-chapter-1`.
- **`alignment`**: This defines where the story text should appear over the map. Options are `center`, `left`, `right`, and `full`. When the browser window is less than 750 pixels wide, the story will be `center` aligned.
- `hidden`: Sets the visibility of the chapter to `hidden` when `true`. The chapter will still trigger a map and layer transition.
- `title`: The title of the section, displayed in an `h3` element.
- `image`: The path to an image to display in this section.
- `caption`: Adds a caption for the image.
- `author` : Adds an author to display at the bottom of the chapter.
- `website`: Adds a website to display at the bottom of the chapter.
- `legend`: Adds a HTML legend box for this chapter. `legend` must be enabled in the config settings above as well.
- `description`: The main story content for the section. This should be aligned with what the reader is seeing on the map. In the vanilla version, this field will render as HTML. Images, links, and other items can be included as HTML.
- **`location`**: Details about the map display and camera view.
    - **`center`**: Center coordinates of the map, as `longitude, latitude`
    - **`zoom`**: Zoom level of the map.
    - **`pitch`**: Angle of the map view. `0` is straight down, and `60` is highly tilted.
    - **`bearing`**: Degrees of rotation clockwise from North (`0`). Negative values represent counter-clockwise rotation.
- `mapAnimation`: Defines the [animation type](https://docs.mapbox.com/mapbox-gl-js/api/#map#jumpto) for transitioning between locations. This property supports 'flyTo', 'easeTo', and 'jumpTo' animations. If not specified, defaults to `flyTo`.
    - flyTo and easeTo [options](https://docs.mapbox.com/mapbox-gl-js/api/map/#flyto-parameters) (`curve`, `maxDuration`, `minZoom`, `screenSpeed`, `speed`) can be included in the `location` array, for example:
```
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00,
                speed: 0.2,
                curve: 1
            }
```
- `rotateAnimation`: Starts a slow rotation animation at the end of the map transition when set to `true`. The map will rotate 90 degrees over 24 seconds.
- `mapInteractive`: When set to `true`, sets this chapter to be interactive, allowing the user to pan and zoom across the map, and adds navigation controls.
- `callback`: Accepts the name of a JavaScript function and executes the function. Use this if you have custom code you want to run for a chapter, like turning a legend on or off, adding data from an API request, or displaying an interactive graph.
- `onChapterEnter`: Layers to be displayed/hidden/muted when the section becomes active. _Array of objects_
    - `layer`: Layer name as assigned in MapLibre style.
    - `opacity`: The opacity to display the layer. `0` is fully transparent, `1` is fully opaque.
    - `duration`: The length of the opacity transition, numeric, in milliseconds. Default is 300. This is an optional parameter and can be omitted.
- `onChapterExit`: Same as `onChapterEnter` except it is triggered when the section becomes inactive. _Array of objects_


### Layer Configuration in your MapLibre style

Add and style each custom layer in your MapLibre style. Next, set any layers's style to be hidden with `0` opacity. For example, if you have a `circle` layer, makes sure the `color-opacity` and/or the `stroke-opacity` is set to 0.

This will ensure that the map appears correctly when the story page loads. To adjust the opacity of the layers as the reader scrolls through the story, use the `onChapterEnter` or `onChapterExit` configuration options to set your desired opacity for the layer.

You may also opt to add more sources and layers using the `useCustomLayers` configuration option above, defined in `sources.js`.

## Deployment

Host the files in this repository in the same directory. You can either deploy this tool as static HTML, or as a server using Node and Express.JS.

For both options, you have to set absolute paths in your `style.json` for the sources, sprites, and font glyphs. 

### As static HTML

This template will work as static HTML when hosted on a web-accessible location. Simply place the `dist/`, `images/`, `map/` (if you are hosting your own map and tiles), `config.js`, `index.html`, and `sources.js` (if you are using it) in the same directory. Accessing that directory in a browser should load the story map.

For hosting online, if you don't know where to start, look into GitHub Pages or Netlify.

### Using Node.JS

You can deploy this template as a server using Node. 

First, make sure you have Node and npm (Node Package Manager) installed.

Next, in the directory, run `npm install` to set up your node packages. You can also run `npm run build` to bundle your scripts. (The repo comes with a pre-compiled `bundle.js` file, but this guarantees you bundle the latest versions of MapLibre etc.)

To initialize the server, run `node index.js`. The default port is 5000 which you are free to change in `index.js`.

We are using Express.JS to initialize the server, and to handle gzipped vector tiles (with file extension `.vector.pbf`).

## Built With

- MapLibre GL JS
- Scrollama.js

## Acknowledgment

This template is based on [Mapbox's Storytelling Template](https://github.com/mapbox/storytelling), which works great with maps designed in their Studio tool but requires a Mapbox access token.