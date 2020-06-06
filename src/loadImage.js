import arrayBufferToImage from "./arrayBufferToImage.js";
import createImage from "./createImage.js";
import fs from "fs-extra";
//
// This is a cornerstone image loader for web images such as PNG and JPEG
//
let options = {
  // callback allowing customization of the xhr (e.g. adding custom auth headers, cors, etc)
  beforeSend(/* xhr */) {},
};

// Loads an image given a url to an image
export function loadImage(imageId) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(imageId)
      .then((data) => {
        const imagePromise = arrayBufferToImage(data);

        imagePromise.then((image) => {
          const imageObject = createImage(image, imageId);

          resolve(imageObject);
        });
      })
      .catch(reject);
  });

  const cancelFn = () => {};

  return {
    promise,
    cancelFn,
  };
}

export function configure(opts) {
  options = opts;
}
