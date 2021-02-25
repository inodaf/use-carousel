# 🎠 <code>use-carousel</code> · <small>`v0.1.0`</small>
A [React Hook](https://reactjs.org/docs/hooks-intro.html) for easily creating interactive presentations.

- **Styleless:** Composable properties ready for any situation with no enforced styling rules.

## Installation
```sh
yarn add @inodaf/use-carousel
```

## Basic Usage
```tsx
import { useCarousel } from '@inodaf/use-carousel'

const items = [
  <img src="cute-dogo.png" alt="My dog" />,
  <img src="cute-dogo-2.png" alt="My other dog" />
];

function MyPage() {
  const { previous, next, carouselItem } = useCarousel(items)

  return (
    <article>
      <h1>My Dogs</h1>
      <div>
        {carouselItem}
      </div>
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </article>
  )
}
```