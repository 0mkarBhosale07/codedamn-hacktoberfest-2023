//present.js file code

import * as data from "./data.js";

export const blogObject = {
  title: data.default.title,
  imagePath: data.default.imagePath,
  description: data.default.description,
};

console.log(blogObject);


//data.js code
const title = "Resolving Imports in NodeJS";

const imagePath = "seo/js-imports.png";

const description = "Learn about ES6 Imports and how to use them in Node.js";

export default { title, imagePath, description };


//Make sure to add "type":"module" in the package.json file to use ES6 methods! 