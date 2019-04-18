# Customizable react carousel

Latest version: ```0.0.7```

[DEMO](https://bf-man.github.io/)

Simple but effective customizable carousel component.

Running examples locally:

  - clone project
  - run ```yarn```
  - run ```yarn dev```
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

### Props
| prop                  | type           | default      | info                                      |
| --------------------- | -------------- | ------------ | ----------------------------------------- |
| infinite              | boolean        | false        | items count should be showItemsCount + 1  |
| showItemsCount        | integer        | 3            |                                           |
| transitionDuration    | Number         | 0.5          | Slide animation duration (seconds)        |
| nextArrow             | function/class | FaAngleRight | A function/class of component to extend default next arrow. See examples |
| prevArrow             | function/class | FaAngleLeft  | A function/class of component to extend default prev arrow. See examples |
| showDots              | boolean        | false        | Show dots navigation flag                 |
| dot                   | function/class | FaCircleO / FaCircle | A function/class of component to extend default dot. props.current (boolean) will be passed to it. See examples |
| enableDragScroll      | boolean        | true         | Pass false to disable drag scroll         |
| enable3d              | boolean        | false        | Experimental feature. Currently it WON'T work properly with enabled dots |
| effectOf3d            | object         | { name: 'scale' } | Experimental feature. Available effects: { name: 'scale' }, { name: 'daw', dawStep: 50 }. For daw you must provide dawStep and set bigger height of the List component using css. See example. |

### ClassName Props
| prop                  | type           | default      | info                                      |
| --------------------- | -------------- | ------------ | ----------------------------------------- |
| className             | string         | ''           | Will be added provided className to main wrapper  |
| arrowWrapperClassName | string         | ''           | Will be added provided className to Arrow wrapper. Also will be added arrowWrapperClassName--prev and arrowWrapperClassName--next to corresponding arrows|
| dotWrapperClassName   | string         | ''           | Will be added provided className to Dot wrapper   |
| dotsWrapperClassName  | string         | ''           | Will be added provided className to Dots wrapper  |
| listWrapperClassName  | string         | ''           | Will be added provided className to List wrapper  |
