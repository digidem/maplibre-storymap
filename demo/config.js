var config = {
    style: 'map/style.json',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'MapLibre Storymap template',
    logo: '',
    subtitle: 'Demo of the template using self-hosted tiles',
    byline: '',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'First Title',
            image: 'images/tobi.jpg',
            caption: '',
            website: '',
            author: '',
            legend: '',
            description: 'Tiles courtesy of MapLibre sample world map demo tiles (<a href="https://github.com/maplibre/demotiles" target="_blank">link</a>).',
            location: {
                center: [35, 1],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                {
                    layer: 'countries-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: 'images/minkus.jpg',
            description: 'Here, we just turn off <strong>countries-fill</strong> just to demonstrate the functionality. This would look a lot nicer with a custom map and layers etc. as used for a typical story map.',
            location: {
                center: [-79, 0],
                zoom: 5,
                pitch: 0,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'countries-fill',
                    opacity: 0
                }
            ],
            onChapterExit: []
        }
    ]
};
