# playwright-playground
https://playwright.dev/docs

## Setup
###
```
# Run from your project's root directory
npm init playwright@latest
# Or create a new project
npm init playwright@latest new-project
```

## Page Object Model
https://playwright.dev/docs/test-pom

## Authentication
### Preparation
1. Record the cookies and localStorage with codegen first
```
npx playwright codegen --save-storage=auth.json
```
2. Login in the open browser.
3. Close the browser
4. Use `auth.json` for login

### Reuse authentication
Add setting in `playwright.config.js` for all test
```
const config = {
  use: {
    storageState: 'auth.json',
  },
}
```

Or use it in test spec directly
```
const { test, expect } = require('@playwright/test');
test.use({ storageState: 'auth.json' });
...

```
## Run test
```
npx playwright test 
```