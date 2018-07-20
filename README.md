# react-button-loader

Button with loader feature.

[![NPM](https://img.shields.io/npm/v/@dallegoet/react-button-loader.svg)](https://www.npmjs.com/package/@dallegoet/react-button-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @dallegoet/react-button-loader --save
```

## Usage

```jsx
import React, { Component } from 'react'

import ButtonLoader from '@dallegoet/react-button-loader'

class Example extends Component {
  render () {
    return (
      <ButtonLoader isLoading={true}>
        Click me !
      </ButtonLoader>
    )
  }
}
```

## Props

| Property  | Description |
| ------------- | ------------- |
| isLoading `boolean`  | Default: `false` -- Display or not the loader.  |

## License

MIT © [dallegoet](https://github.com/dallegoet)
