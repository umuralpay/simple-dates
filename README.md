# JS-Dates
## _Simple, lightweight javascript library for manipulating dates_

[![Build Status](https://api.travis-ci.com/umuralpay/js-dates.svg?branch=main)](https://api.travis-ci.com/umuralpay/js-dates.svg?branch=main)

Dates is a simple, lightweight & typed date manipulator


## Features

- Getting UTC date
- Ability to add "x" amount of hours, minutes and seconds to dates 
- Comparing dates
- Formatting dates (TODO)
- Locale support (TODO)

## Installation

``` npm install @umuralpay/js-dates ```

or

``` yarn add @umuralpay/js-dates ```

## Usage

Getting UTC Date

```javascript
import {getUTCDate} from "@umuralpay/js-dates"; 
const date = getUTCDate(); // if epoch needed getUTCDate(true);
```

Adding Hours To Date

```javascript
import {addHours} from "@umuralpay/js-dates"; 
const date = addHours(1); // hours: number, date = new Date(), utc = false, epoch = false
```

Adding Minutes To Date

```javascript
import {addMinutes} from "@umuralpay/js-dates"; 
const date = addMinutes(30); // mins: number, date = new Date(), utc = false, epoch = false
```

Adding Seconds To Date
```javascript
import {addSeconds} from "@umuralpay/js-dates"; 
const date = addSeconds(20); // secs: number, date = new Date(), utc = false, epoch = false
```

Note: if epoch is true utc parameter is ignored 

Comparing Dates
```javascript
import {isLater} from "@umuralpay/js-dates";

const date1 = new Date();
const date2 = new Date();
date2.setMinutes(date2.getMinutes() + 30);

console.log(isLater(date1, date2)); // returns false

## License

ISC
