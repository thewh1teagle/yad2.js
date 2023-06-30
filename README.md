# yad2.js


API for Yad2 Website

#### Installation
```shell
npm i yad2.js
```

#### Usage
1. Head over to https://yad2.co.il/ (or https://www.yad2.co.il/realestate/forsale/map?z=10 for map view)
2. Search for something
3. Apply filters as you wish
4. Copy the following into the console. every time you apply filter - you will get the complete URL
```js
(() => {
    // Save a reference to the original open method
    var originalOpen = XMLHttpRequest.prototype.open;
  
    // Override the open method
    XMLHttpRequest.prototype.open = function(method, url) {
      // Check if the URL contains pattern 
      if (/\/feed-search-legacy|\/api\/feed\//.test(url)) {
        alert("Copy this URL: " + url);
      }
  
      // Call the original open method
      originalOpen.apply(this, arguments);
    };
})();
```
5. Copy the URL and use it
```ts
import { feedSearch } from 'yad2.js'

const {responseData} = feedSearch('<URL>')
console.log(responseData.data) // TypeScript friendly!
```


#### Features
- ✅ TypeScript friendly
- 🍃 Super Lightweight
- 🚀 Fast