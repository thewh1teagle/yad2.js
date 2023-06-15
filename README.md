# yad2.js


API for Yad2 Website

#### Installation
```shell
npm i yad2.js
```

#### Usage
1. Head over to https://yad2.co.il/
2. Search for something
3. Apply filters as you wish
4. Copy the following into the console. every time you apply filter - you will get the complete URL
```js
(() => {
    // Save a reference to the original open method
    var originalOpen = XMLHttpRequest.prototype.open;
  
    // Override the open method
    XMLHttpRequest.prototype.open = function(method, url) {
      // Check if the URL contains "/feed-search-legacy"
      if (url.includes("/feed-search-legacy")) {
        // Alert the link
        alert("Copy this URL: " + url);
      }
  
      // Call the original open method
      originalOpen.apply(this, arguments);
    };
})();
```
5. Copy the URL and use it
```ts
import { getItems } from 'yad2.js'

const {response, responseData} = getItems('<URL>')
console.log(responseData.data) // TypeScript friendly!
```


#### Features
- ✅ TypeScript friendly
- 🍃 Super Lightweight
- 🚀 Fast