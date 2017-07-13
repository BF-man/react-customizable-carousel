# Customizable react carousel

Latest version: ```0.0.3```

Simple but effective customizable carousel component.
It will render only ```showItemsCount + 2``` carousel items, where 2 is left and right hidden items.

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
| prop               | type    | default | info                                      |
| ------------------ | ------- | ------- | ----------------------------------------- |
| infinite           | boolean | false   | items count should be showItemsCount + 1  |
| showItemsCount     | integer | 3       |                                           |
| transitionDuration | integer | 0.5     |                                           |
