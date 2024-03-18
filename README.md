# Random ID Generator

[![npm version](https://img.shields.io/npm/v/rand-uid.svg)](https://www.npmjs.com/package/rand-uid)
[![license](https://img.shields.io/npm/l/rand-uid.svg)](https://github.com/NazmulHossain2905/rand-uid)
![NPM Downloads](https://img.shields.io/npm/dw/rand-uid)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/rand-uid)
![NPM Collaborators](https://img.shields.io/npm/collaborators/rand-uid)

A simple and lightweight library to generate random IDs.

## Installation

You can install the `rand-uid` package via npm:

```bash
npm install rand-uid
```

## Imports

```javascript
import { randomUid } from "rand-uid";
```

## Basic Usage

```javascript
// Generate a random ID
const id = randomUid();
console.log(id); // 4WbMU-hWwwL-6ygny-ryd9v-pFNgn

// Others
console.log(randomUid({ variant: "number" })); // 98966-20008-31150-43572-53051
console.log(randomUid({ variant: "character" })); // UHbOK-UIlPy-lrlhV-hUuRb-TVzfd
console.log(randomUid({ charCase: "upper" })); // 9X1WV-OEQ99-COC7P-TY4IH-5MMGS
console.log(randomUid({ charCase: "lower" })); // wxczs-5nndb-foqxg-wb0qe-lrj72
console.log(randomUid({ prefix: "UID-" })); // UID-Tvh55-bm1t1-uRdjg-HBjEq-yI4Eu
```

## Custom Usages

### `randomUid(options): string` - `options` are Optional

### `Options`

The function accepts the following options:

- [`separator`](#separator): The character used to separate parts of the UID **(default: "-").**

- [`sectionLength`](#sectionlength): The length of each section/part of the UID **(default: 5).**

- [`totalSection`](#totalsection): The total number of section/parts in the UID **(default: 5).**

- [`prefix`](#prefix): A string to prepend to the generated UID **(default: "").**

- [`variant`](#variant): The type of characters to include in the UID. Options are `"number"`, `"character"`, or `"mixed"` **(default: "mixed").**

- [`charCase`](#charcase): The case of characters in the UID. Options are `"lower"`, `"upper"`, or `"mixed"` **(default: "mixed").**

---

**Options `{}`**

```javascript
const options = {
    separator = "-",
    sectionLength = 5,
    totalSection = 5,
    prefix = "",
    variant = "mixed",
    charCase = "mixed",
  }
```

## Example:

### `separator`

```javascript
const uid_1 = randomUid({ separator: "_" });
console.log(uid_1); // Gk3IS_9E9Su_6EDgP_rcvGR_PTRiX

const uid_2 = randomUid({ separator: "___" });
console.log(uid_2); // iUZSl___7iyZM___2hc4l___7plX0___cq0q0

const uid_3 = randomUid({ separator: "_", variant: "number" });
console.log(uid_3); // 37961_59202_78555_73383_28752
```

### `sectionLength`

```javascript
const uid_1 = randomUid({ separator: "_", sectionLength: 8 });
console.log(uid_1); // 7Fqt565l_mDCyja3F_SdIKc58f_fmAhw8aU_3eE5t7Sz

const uid_2 = randomUid({ sectionLength: 4, variant: "number" });
console.log(uid_2); // 9189-9363-0056-5744-1965

const uid_3 = randomUid({ sectionLength: 8, variant: "character" });
console.log(uid_3); // jEfYCpAK-HccEBOnz-FhTYyfrH-lzTkSHVP-dAEIeRqG
```

### `totalSection`

```javascript
const uid = randomUid({ totalSection: 8 });
console.log(uid); // E3djC-N7OWe-b153F-bXrK1-UPyCG-SX2f4-4Ix6A-V877H
```

### `prefix`

```javascript
const uid = randomUid({ prefix: "ID-" });
console.log(uid); // ID-X1opz-qv2pz-GYvy4-4iNuu-bSu6i
```

### `variant`

```javascript
// variant: 'number' - only number
const numberId = randomUid({ variant: "number" });
console.log(numberId); // 71274-43697-36242-77585-38443

// variant: 'character' - only character
const characterId = randomUid({ variant: "character" });
console.log(characterId); // QlupI-YZFcZ-HOfIx-OgdpL-oamML

// variant: 'mixed' - default
const mixedId = randomUid({ variant: "mixed" });
console.log(mixedId); // WDIEd-o3Imp-ksb5Z-gb6zG-KfdRb
```

### `charCase`

```javascript
// charCase: 'upper' - all uppercase
const upperUid = randomUid({ charCase: "upper" });
console.log(upperUid); // MBXIM-DG7OI-M17SS-TX2FT-DSDJM

// charCase: 'lower' - all lowercase
const lowerUid = randomUid({ charCase: "lower" });
console.log(lowerUid); // 6ens0-pvqvo-weipp-rqk8n-3sd1p

// charCase: 'mixed' - default
const mixedUid = randomUid({ charCase: "mixed" });
console.log(mixedUid); // nWYmq-YWwVQ-7Gkup-FpO30-rQrAz
```

### `short-id`

```javascript
// way - 1
const shortId_1 = randomUid({ sectionLength: 16, totalSection: 1 });
console.log(shortId_1); // mdO4p0aJJag8U5Ao

// another
const shortId_2 = randomUid({ sectionLength: 8, totalSection: 1 });
console.log(shortId_2); // g7MZ3llc

// way - 2
const shortId_3 = randomUid({
  sectionLength: 1,
  totalSection: 16,
  separator: "",
});
console.log(shortId_3); // H6r9IDnpU7Vsvj3Q

// way - 3
const shortId_4 = randomUid({ separator: "" });
console.log(shortId_4); // WOVL4UlrLlo1Pzra68gIihbdY

// way - 4 : number
const shortId_5 = randomUid({
  sectionLength: 10,
  totalSection: 1,
  variant: "number",
});
console.log(shortId_5); // 7948612351
```

---

## The `options` _args:_ object `[property]:[value]`

| Property                        | Description                                              | Value                                   | Default Value |
| ------------------------------- | -------------------------------------------------------- | --------------------------------------- | ------------- |
| [separator](#separator)         | The character used to separate sections/parts of the UID | `string`                                | `"-"`         |
| [sectionLength](#sectionlength) | The length of each section/part of the UID               | `number`                                | `5`           |
| [totalSection](#totalsection)   | The total number of sections/parts in the UID            | `number`                                | `5`           |
| [prefix](#prefix)               | A string to prepend to the generated UID                 | `string`                                | `""`          |
| [variant](#variant)             | The type of characters to include in the UID             | `"number"`, `"character"` and `"mixed"` | `"mixed"`     |
| [charCase](#charcase)           | The case of characters in the UID                        | `"upper"`, `"lower"` and `"mixed"`      | `"mixed"`     |

## Follow on [GitHub](https://github.com/NazmulHossain2905)
