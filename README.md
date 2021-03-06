[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
  <h3 align="center" style="font-family: 'Permanent Marker', cursive; font-size: 5em;">Shrtcts</h3>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Install the package](#installation)
* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- INSTALLATION -->
### Installation

yarn
```sh
yarn add react-shrtcts
```
npm
```sh
npm i react-shrtcts
```


<!-- ABOUT THE PROJECT -->
## About The Project

*NOTE:* This is very much still a W.I.P dont excpect miracles 

We created this package because there simply was no other option out there (or atleast on page 1 of google). We have developed a convenient hook for devs to use that will connect different key combinations with a relevant function!

The hook utilises its own context to ensure state is maintained and the dom isnt littered with events

### Built With

* [React](https://reactjs.org/)
* [Typescript](https://typescriptlang.org)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

<!-- USAGE EXAMPLES -->
## Usage

```typescript

// YourApp.tsx

<ShortcutProvider>
  // ... Your Components
</ShortcutProvider>

// YourComponent.tsx

useShortcuts([{ 
    keys: ['ctrl', 's'],
    fn: (event: SpeshEvent) => {
        // do awesome stuff
    }
}])

```

The `ShortcutConfig` object array passed to the `useShortcuts` hook is of the shape:
```typescript
interface ShortcutConfig {
  /** 
   * Simple array of string key values 
   * When all keys are pressed in combination the `ShortcutFunction` will be run
   */
  keys: KeyMap 
  /**
   * The function to run when all keys are pressed
   */
  fn: ShortcutFunction
  /**
   * A short description on the keybinds function, this will be used to display to the user
   */
  description?: string 
}
```

## Demo Application

Check the `demo` directory for a working example.

View the working demo @[react-shrtcts](https://react-shrtcts.github.io)

<!-- ROADMAP -->
## Roadmap

View the [Roadmap](https://github.com/react-shrtcts/react-shrtcts/projects/1)

See the [open issues](https://github.com/react-shrtcts/react-shrtcts/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/react-shrtcts/react-shrtcts](https://github.com/react-shrtcts/react-shrtcts)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [Wes Bos - KeyCode Info](https://keycode.info)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/react-shrtcts/react-shrtcts/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/react-shrtcts/react-shrtcts/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/react-shrtcts/react-shrtcts/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/react-shrtcts/react-shrtcts/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/react-shrtcts/react-shrtcts/blob/master/LICENSE.txt