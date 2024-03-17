# promise-one-success

`promise-one-success` is a lightweight, zero-dependency JavaScript module designed to facilitate handling multiple asynchronous operations by succeeding if at least one promise resolves successfully. It's particularly useful in scenarios where you have multiple redundant or parallel operations, and you require only one to succeed to proceed, such as requesting a resource from multiple mirrors or endpoints.

## Features

- **Simple API**: A straightforward and intuitive API that requires minimal setup.
- **Zero Dependencies**: No external dependencies, ensuring fast installation and low bundle size.
- **TypeScript Support**: Comes with TypeScript typings, making it ideal for TypeScript projects.
- **Versatile**: Useful in any situation where you need to succeed with the first resolved promise among many, such as API calls to multiple servers, parallel I/O operations, etc.

## Installation

You can install `promise-one-success` using npm or yarn:

```bash
npm install promise-one-success
```

or

```bash
yarn add promise-one-success
```

## Usage

Here's a basic example of how to use `promise-one-success`:

```javascript
import { oneSuccess } from 'promise-one-success';

const promise1 = new Promise((resolve, reject) => setTimeout(reject, 100, 'First fails'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Second succeeds'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 300, 'Third fails'));

oneSuccess([promise1, promise2, promise3])
  .then(result => console.log(result)) // Logs: "Second succeeds"
  .catch(errors => console.error(errors)); // Not called in this case
```

### API

#### oneSuccess<T>(promises: Array<Promise<T>>): Promise<T>

Accepts an array of promises and returns a new promise that resolves as soon as one of the input promises resolves. If all input promises are rejected, the returned promise is rejected with an array of all rejection reasons.

- `promises`: An array of `Promise<T>` instances.
- Returns: A `Promise<T>` that resolves or rejects according to the rules described above.

## TypeScript Support

`promise-one-success` includes TypeScript definitions. When using TypeScript, you can take advantage of strong typing as shown below:

```typescript
import { oneSuccess } from 'promise-one-success';

async function fetchDataFromMirrors(): Promise<string> {
  const mirrors: Promise<string>[] = [
    fetchFromMirror1(),
    fetchFromMirror2(),
    fetchFromMirror3(),
  ];

  return oneSuccess<string>(mirrors);
}

async function fetchFromMirror1(): Promise<string> {
  // Implementation...
}

async function fetchFromMirror2(): Promise<string> {
  // Implementation...
}

async function fetchFromMirror3(): Promise<string> {
  // Implementation...
}
```

## Contributing

Contributions are welcome! If you'd like to contribute, feel free to fork the repository and submit a pull request.

### Running Tests

To run tests, first install the development dependencies:

```bash
npm install
```

Then, you can run the tests using:

```bash
npm test
```

## License

`promise-one-success` is MIT licensed. See the [LICENSE](LICENSE) file for more details.

