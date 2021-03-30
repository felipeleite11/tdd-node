<h1 align="center">Basic JEST tests (unit and integration)</h1>

This project implements the TDD concepts, using the Jest library for unit and integration tests.

<p align="center">
	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxICnjdUxAccuY-5M0LskGZELvpCQcSFtJBXdV-xb0hHd2W8JBcxVWGuuvKDHHdDt_sw&usqp=CAU" height="180" width="400" alt="Demo screen" />
</p>


<h2>Environment requirements</h2>

- [NodeJS](https://nodejs.org) with the [NPM](https://www.npmjs.com) package manager installed.
- Install the [Yarn](https://yarnpkg.com) if you prefer to use it.

<h2>Main NPM packages</h2>

|  Module    | Purpose                                                   |
| -------------------------: | ----------------------------------------- |
| `Express`  | Create a web server to serve statically the test page     |
| `Jest`     | Build and execute tests                                   |
| `SQLite`   | Store temporary tests data                                |


<h2>Running tests</h2>

- Clone the project: `git clone https://github.com/felipeleite11/tdd-node.git`
- Execute instalation of dependencies: `npm install` ou `yarn`
- Execute `npm test` or `yarn test`
- Open `tests/coverage/Icov-report/index.html` to view and browse test results in the browser


<h2>The expected is...</h2>

- Two identical images, side by side, captured directly from your webcam
- When speaking into your microphone, your voice should be echoed through your device’s speaker
