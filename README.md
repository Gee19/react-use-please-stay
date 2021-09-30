# react-use-please-stay  
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/princefishthrower/react-use-please-stay/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-use-please-stay.svg?style=flat)](https://www.npmjs.com/package/react-use-please-stay) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) 

🎃 ![](https://img.shields.io/github/hacktoberfest/2021/princefishthrower/react-use-please-stay) 🎃

![react-use-please-stay at work](example.gif)

A React hook that animates the document title and/or favicon when focus from the page is lost. (Or jump down to [the options](#options) to see how you can set it up to _always_ animate! 😉)

# Interactive Demo

[A fully interactive demo is here.](https://princefishthrower.github.io/react-use-please-stay)

# Getting Started

Install and save this package as a dependency:

```bash
npm install --save react-use-please-stay
```

Import the hook with:

```tsx
import { usePleaseStay } from 'react-use-please-stay';
```

Use it within your functional component! (It has return type of `void`, so you can just call it):

```tsx
usePleaseStay({ titles: ["Don't go!", 'We have React hooks!'] });
```

<a name="options"></a>
# Options

Options for the hook are passed via an object of [type `UsePleaseStayOptions` (click me!)](./src/types/UsePleaseStayOptions.ts).

# Usage

Minimal usage in a component, passing the single required option `titles`:

```tsx
function App() {
  usePleaseStay({ titles: ["Don't go!", 'We have React hooks!'] });
  return (
    <>
      <h1>usePleaseStay</h1>
      <p>
        An example of the usePleaseStay hook. Leaving this browser tab open, navigate
        or open another tab and watch the magic happen!
      </p>
    </>
  );
}

export default App;
```

Loop through multiple messages:

```tsx
usePleaseStay({
  titles: ["Don't go!", 'We have React hooks!', "We're sad!", 'Come back!'],
});
```

Pass a single message and set the `animationType` option to `AnimationType.CASCADE` to cascade the letters (default is `AnimationType.LOOP`):

```tsx
usePleaseStay({
  titles: ["React App"],
  animationType: AnimationType.CASCADE
});
```

Optional - specify a slower interval time in milliseconds (default is `1000`):

```tsx
usePleaseStay({
  titles: ["Don't go!", 'We have React hooks!', "We're sad!", 'Come back!'],
  interval: 3000,
});
```

Optional - add in one or more favicon URIs to loop through each time the title changes (default is `[]`):

```tsx
usePleaseStay({
  titles: ["Don't go!", 'We have React hooks!', "We're sad!", 'Come back!'],
  interval: 3000,
  faviconURIs: ['https://redux.js.org/img/favicon/favicon.ico'],
});
```

Optional - have the animation always run with the `alwaysRunAnimations` (default is `false`):

```tsx
usePleaseStay({
  titles: ["Don't go!", 'We have React hooks!', "We're sad!", 'Come back!'],
  interval: 3000,
  faviconURIs: ['https://redux.js.org/img/favicon/favicon.ico'],
  alwaysRunAnimations: true,
});
```

That's about it for all possible configurations. 

# Pitfalls

**Since this hook interacts with `document.title` directly it should only be called only ***once*** in your app**, for example in a layout or `App` component - otherwise the title animation will not be smooth and things could get... _strange_.

# Known Issues

In some frameworks like GatsbyJS, the `document.title` is injected some time after the hook mounts and thus the default title set when returning to the page is sometimes wrong. 

_This causes incorrect behavior only in development environments. There are no known issues in production builds._

# JQuery Implementation

For those interested, the only JQuery implementation I could find was in this [GitHub gist](https://gist.github.com/sonnm/fcaaf616e62cc46e8756599306f4e1ad#file-jquery-pleasestay-js). I'm not sure if there is an official package out there for either a vanilla JavaScript or jQuery version; I couldn't find either.
