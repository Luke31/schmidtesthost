# Published at
New URL: https://d3m2wncz05s78m.cloudfront.net/onepage?param=test
Legacy support: https://d3m2wncz05s78m.cloudfront.net/v3/onepage?param=test

# Develop with hot reload
`yarn dev`

# Build and serve locally
`yarn build && yarn preview`

# Build and deployment
Needs s3 access to bucket

`yarn build && yarn deploy`

# AWS config
Cloudfront path patterns:
```
- /v3/*
- /onepage
```

Cloudfront function:
```
function handler(event) {
    var request = event.request;
    var currentUri = request.uri;

    var shouldReplacePath = request.method === "GET" && !currentUri.includes(".");

    if (shouldReplacePath) {
        request.uri = "/v3/index.html";
    }

    return request;
}
```