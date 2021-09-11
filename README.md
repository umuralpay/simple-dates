# Dates
## _Simple, lightweight javascript library for manipulating dates_

[![Build Status](https://travis-ci.org/umuralpay/dates.svg?branch=main)](https://travis-ci.org/umuralpay/dates)

Dates is a simple, lightweight date manipulator written in javascript


## Features

- Getting UTC date
- Ability to add "x" amount of hours, minutes and seconds to dates
- Comparing dates
- Formatting dates

## Installation

``` npm install dates ```

or

``` yarn add dates ```

## Usage

```javascript
import {getUTCDate} from "dates"; 
const date = getUTCDate(); // if epoch needed getUTCDate(true);
```
## License

MIT
