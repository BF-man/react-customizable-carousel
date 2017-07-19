# Customizable react carousel

Latest version: ```0.0.5```

[DEMO](https://bf-man.github.io/)

Simple but effective customizable carousel component.

Running examples locally:

  - clone project
  - run ```yarn```
  - run ```yarn dev-server```
  - open ```localhost:8080```

### Installation
  - Install package
        ```
        yarn add react-customizable-carousel
        ```
  - Import component
    ```
    import { Carousel } from 'react-customizable-carousel'
    ...

    <Carousel>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1>
    </Carousel>
    ```
  - Import CSS:
        ```
        @import "react-customizable-carousel";
        ```

### Props
| prop                  | type           | default      | info                                      |
| --------------------- | -------------- | ------------ | ----------------------------------------- |
| infinite              | boolean        | false        | items count should be showItemsCount + 1  |
| showItemsCount        | integer        | 3            |                                           |
| transitionDuration    | integer        | 0.5          | Slide animation duration (seconds)        |
| nextArrow             | function/class | FaAngleRight | A function/class of component to extend default next arrow. See examples |
| prevArrow             | function/class | FaAngleLeft  | A function/class of component to extend default prev arrow. See examples |
| ArrowWrapperClassName | string         | ''           | Will be added provided className to arrow wrapper. Also will be added ArrowWrapperClassName--prev and ArrowWrapperClassName--next to corresponding arrows|
| showDots              | boolean        | false        | Show dots navigation flag                 |
| dot                   | function/class | FaCircleO / FaCircle | A function/class of component to extend default dot. props.current (boolean) will be passed to it. See examples |
| dotWrapperClassName   | string         | ''           | Will be added provided className to dot wrapper  |
| dotsWrapperClassName  | string         | ''           | Will be added provided className to dots wrapper |
