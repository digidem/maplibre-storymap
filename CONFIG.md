# Configuration Options

_See also [config.js.example](config.js.example)_

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