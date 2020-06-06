# cornerstone Web Image Loader

A [cornerstone](https://github.com/cornerstonejs/cornerstone) Image Loader for images (PNG, JPEG) using fs.
Usage

---

Simply include the cornerstoneFSImageLoader.js in your HTML file after you load cornerstone.js and then set the cornerstone instance as an external module for cornerstoneFSImageLoader:

```javascript
cornerstoneFSImageLoader.external.cornerstone = cornerstone;
```

This will let cornerstoneFSImageLoader register itself with cornerstone to load imageId's that have the http or https url schemes. To display an image, pass the url to the image as the imageId parameter to a cornerstone API function loadImage().

## Contributors

(@jeremypatrickdahan@gmail.com for adding fs support)
@onluiz for fixing a bug with images not being properly invalidated
@leonardorame for adding support for CornerstoneImageLoadProgress

# Build System

This project uses webpack to build the software.

## Pre-requisites:

NodeJs - [click to visit web site for installation instructions](http://nodejs.org).

## Common Tasks

Update dependencies (after each pull):

> npm install

Running the build:

> npm start

Automatically running the build and unit tests after each source change:

> npm run watch

# Why is this a separate library from cornerstone?

Cornerstone was designed to support loading of any kind of image regardless of its container,
compression algorithm, encoding or transport. This is one of many possible image loaders
that can provide the image pixel data to cornerstone to display

# Copyright

Copyright 2017 Chris Hafey [chafey@gmail.com](mailto:chafey@gmail.com)
