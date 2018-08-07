# fetch-mock-url
> reproducible example for possible issue with `fetch-mock`

## Run the tests

```
npm install
npm test
```

I would expect all tests to pass as the requests made are the same. Though, only string passed to `fetch` and to the matcher will work.
