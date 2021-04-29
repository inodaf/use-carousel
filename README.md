# 🎠 use-carousel
A [React Hook](https://reactjs.org/docs/hooks-intro.html) for easily creating interactive presentations.

- **Styleless:** Composable properties ready for any situation with no enforced styling rules.
- **Nano-weight:** Less than `1.60kb` minified and `650b` compressed with `gzip`.

## Installation
The package is available through the npm registry for easy installation.

```sh
yarn add @inodaf/use-carousel
```

## Basic Usage

Import the `useCarousel` hook function.
```ts
import { useCarousel } from '@inodaf/use-carousel'
```

Define the carousel items. They can be of any kind, even JavaScript primitives. In this case we defined some image elements with dog pictures.
```ts
const items = [
  <img src="cute-dogo.png" alt="My dog" />,
  <img src="cute-dogo-2.png" alt="My other dog" />
];
```

Create a component and attach the `useCarousel` hook into it. Now reference the `items` on the hook's first argument.
```tsx
function Gallery() {
  const { carouselItem, previous, next } = useCarousel(items)

  return (
    <>
      <div>{carouselItem}</div>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </>
  )
}
```