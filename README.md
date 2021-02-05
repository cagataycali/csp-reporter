 # CSP Reporter

This repository basically creates an HTTP server to collect CSP violations.

[What is CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cagataycali/csp-reporter.git)

> If you deploy to the heroku, you need to add log collector addon like as [Logentries](https://elements.heroku.com/addons/logentries) because by default Heroku masks the stdout in the application logs.

# Installation

Reporter does not have dependency.
Bare HTTP and not included JSON parsing at all. (Which you don't have to do.)

```bash
git clone https://github.com/cagataycali/csp-reporter.git
cd csp-reporter
node index.js # Starts a server at http://localhost:8000
```

# Test

```bash
node test.js # Starts a server at http://localhost:3000
open http://localhost:3000 # check the server's console output.
```