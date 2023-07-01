# yad2.js


API for Yad2 Website

#### Installation
```shell
npm i yad2.js
```

#### Usage
1. Head over to https://yad2.co.il
2. Search for something
3. Apply filters as you wish
4. Copy the following into the console. every time you apply filter - you will get the complete `URL`
```js
XMLHttpRequest.prototype.open = (method, url) => {
  if (/\/feed-search-legacy|\/api\/feed\//.test(url)) alert("Copy this URL: " + url)
  else originalOpen.apply(this, arguments)
}
```
1. Copy the URL and use it
```ts
import { feedSearch } from 'yad2.js'

const {responseData} = feedSearch('<URL>')
console.log(responseData.data) // TypeScript friendly!
```


#### Features
- ✅ TypeScript friendly
- 🍃 Super Lightweight
- 🚀 Fast


#### Todo
Solve Captches using [2captcha](https://www.npmjs.com/package/2captcha)
