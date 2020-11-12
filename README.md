# Loader for React

![Size](https://img.shields.io/github/repo-size/dage459/loader)
![Activity](https://img.shields.io/github/release-date/dage459/loader)
![Activity](https://img.shields.io/github/last-commit/dage459/loader)
![Downloads](https://img.shields.io/github/downloads/dage459/loader/total)

> Simple Loader for React

## Usage

> Import the spinner where ever you will use it!

```javascript
import React from "react";
import Loader from "./loader/Loader";

const App = () => {
  return (
    <div>
      <Loader />
    </div>
  );
};

export default App;
```

### Propertys

> Example use of properties:

```javascript
import React from "react";
import Loader from "./loader/Loader";

const App = () => {
  return (
    <div>
      <Loader type="bouncer" size="lg" color="warning" />
    </div>
  );
};
export default App;
```

- If not Propertys are providet it fall back to the defaults.

- These are: type=`spinner`, size=`md`, color=`primary`

> The Loader can be Displayd in Different Types

| Loader to Display | type    |
| ----------------- | ------- |
| Circular Spinner  | spinner |
| Doted Bouncer     | bouncer |
| Twisting Squares  | square  |

> There are several Size to Display

| Size to Display | size |
| --------------- | ---- |
| Big             | xl   |
| Large           | lg   |
| Medium          | md   |
| Small           | sm   |

> Multiple Colors are Available

| Color to Display | color     |
| ---------------- | --------- |
| Blue             | primary   |
| Grey             | secondary |
| Green            | success   |
| Aqua             | info      |
| Orange           | warning   |
| Red              | danger    |
| light Grey       | light     |
| dark Gray        | dark      |

## FAQ

- **How do I do _specifically_ so and so?**
  - No problem! Just play with it.

---

## License

![LICENCE](https://img.shields.io/github/license/dave459/notifier)

- **[MIT license](http://www.opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://github.com/dage459/notifier.git" target="_blank">@dage</a>.
