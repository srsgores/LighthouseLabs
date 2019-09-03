# W2D4 Lecture - Error Exceptions and Promises

## Content

- Exceptions
- Promises
- Async/Await

## Exceptions

- Any thrown or unhandled error will cause the app to crash!

```javascript
code goes here
```

- `console.log('After executing someFct...')` never gets executed
- Just because there is an error doesn't mean the app should crashed

### Try Catch

- A _try catch_ will gracefully handle the error. `catch` is your back-up plan! Don't starve!

```javascript
code goes here
```

- The benefit is that it doesn't stop the flow of excution
- When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch
- `finally` always get executed whether there is an exception or not. Good for closing connections or files for example.

- For all built-in errors, the error object inside catch block has a few properties:

  - name -> Name of the error
  - message -> Textual message about error details.
  - stack -> Error stack trace

```javascript
code goes here
```

### One Small Problem With Try Catch

- There is caveat with `try catch` clause. It works for synchronous code but not async code!

- Catch block is not there when asynchronous code is executed

```javascript
code goes here
```

- Using promises resolves this issue.

## Promises

- Promises suggest a better syntax to handle callbacks
- Callbacks cannot catch errors with try catch
- Multiple callbacks call lead to callback hell

### Using a tradional callback

```javascript
code goes here
```

- Using multiple callbacks, we get into `callback hell!`

```javascript
code goes here
```

- Code is much harder to read
- More callback nesting means more trouble

### Using Promises

```javascript
code goes here
```

- Multiple promises with Promise.all (or first-to-finish with Promise.race)

```javascript
code goes here
```

### Async Await

- Syntaxic sugar wrapping promises to make our async code more like sync code
- We can finally read async code as easily as synchronous code!

```javascript
code goes here
```
