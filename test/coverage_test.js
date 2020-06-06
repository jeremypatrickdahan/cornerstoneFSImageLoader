/* eslint-disable no-unused-expressions */
import { expect } from "chai";

import * as cornerstoneFSImageLoader from "../src/index.js";

describe("A test that pulls in all modules", function() {
  it("pulls in all modules", function() {
    expect(cornerstoneFSImageLoader).to.exist;
  });
});
