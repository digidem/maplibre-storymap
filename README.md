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

### Steps

1. **Prepare your map tiles and design a MapLibre style**. This template looks for a map `style.json` in the `map/` directory. You could also place all of your map assets (tiles, sprites, font glyphs) here. You could change this, however. 

   * To test out the template, you could use the [MapLibre demo tiles](https://github.com/maplibre/demotiles). Download the repo and place it in this directory, and change the paths for `fonts`, `sprites` and `sources` to your hosting path.

2. **Set the configuration options** as described in the next section. 

3. **Add as many `chapters` in your template as needed.** You'll need a `,` between each section, but no comma at the end. Here is what a `chapter` looks like:

4. **Fill out your sections as needed.**  Give each section a unique name in the section `id` property. This will become the HTML `div` `id`, so avoid spaces in the name. Set the `location` properties for each chapter. The `title`, `description` properties are optional. The `description` supports HTML tags. If you have an image that goes with that section of the story, add the path to the image in the `image` property.

5. **Figure out how you are hosting the template.** If you are deploying it as static HTML, simply place the files somewhere, open the `index.html` file in a browser, and voila! If you are deploying it with Node, you will need to run some additional steps, as listed in **Deployment** below.

### Configuration Options

Please see [CONFIG.md](CONFIG.md).

## Deployment

Host the files in this repository in the same directory. You can either deploy this tool as static HTML, or as a server using Node and Express.js.

For both options, you have to set absolute paths in your `style.json` for the sources, sprites, and font glyphs. 

### As static HTML

This template will work as static HTML when hosted on a web-accessible location. Simply place the `dist/`, `images/`, `map/` (if you are hosting your own map and tiles), `config.js`, `index.html`, and `sources.js` (if you are using it) in the same directory. Accessing that directory in a browser should load the story map.

For hosting online, if you don't know where to start, look into GitHub Pages or Netlify.

### Using Node.js

You can deploy this template as a server using Node. 

First, make sure you have Node and npm (Node Package Manager) installed.

Next, in the directory, run `npm install` to set up your node packages. You can also run `npm run build` to bundle your scripts. (The repo comes with a pre-compiled `bundle.js` file, but this guarantees you bundle the latest versions of MapLibre etc.)

To initialize the server, run `npm run serve`. The default port is 5000; if you want to change the port, run `npm run serve -- <port_number>`, replacing `<port_number>` with your desired port number. For example, to use port 8080, you would run `npm run serve -- 8080`.

We are using Express.js to initialize the server and to handle gzipped vector tiles (with file extension `.vector.pbf`).

## Built with

- MapLibre GL JS
- Scrollama.js

## Storytelling with Maps using MapLibre Workshop

[@fmvaldezg](https://github.com/fmvaldezg) from Temple University Libraries created a [Storytelling with Maps using MapLibre Workshop](https://github.com/fmvaldezg/storytelling_maplibre_workshop), which could be helpful for learning how to use this template.

## Acknowledgment

This template is based on [Mapbox's Storytelling Template](https://github.com/mapbox/storytelling), which works great with maps designed in their Studio tool but requires a Mapbox access token.