<a href="https://github.com/andrewvaughan/slackrpg"><img src="http://slackrpg.andrewvaughan.io/img/logo.png" alt="Ghost" /></a>
<a href="https://github.com/andrewvaughan/slackrpg/releases" target="_blank"><img src="http://img.shields.io/badge/version-0.0.0-blue.svg?style=flat" alt="Current Release" align="right" /></a>

[![SlackRPG][screen-image]][repo-url]


<br />
**SlackRPG** is an idle RPG played within the popular [Slack](https://slack.com/) messaging platform.  Players gain
levels, kill monsters, go on quests, and even attack each other by doing one thing: idling in the game channel.

SlackRPG connects many worlds together, so you can run it on your own team's Slack instance!  Won't you play with us?


## Build Status

[![Build Status][build-image]][build-url]
[![Code GPA][quality-image]][quality-url]
[![Coverage Status][coverage-image]][quality-url]
[![Documentation Status][docs-image]][docs-url]
[![Dependency Status][dependency-image]][dependency-url]


### Connecting to SlackRPG

Coming soon.


### Developer Installation

If you haven't done so already, [install Node.js](https://nodejs.org/)

Then, clone the master repository:

```bash
git clone https://github.com/andrewvaughan/slackrpg.git
cd slackrpg
```

Gulp is required to test and build.  You should install it globally:

```bash
npm install -g gulp
```

Have NPM install all of the project's dependencies:

```bash
npm install
```

Start and test with the built-in NPM scripts:

```bash
npm test
npm start
```


### Contributing

There are many ways to contribute to SlackRPG!  If you have an idea, or have discovered a bug, please
[Open an Issue](https://github.com/andrewvaughan/slackrpg/issues) so it can be addressed.

If you're interested in contributing to the project through design or development, please read our
[Contribution Guidelines](https://github.com/andrewvaughan/slackrpg/blob/master/CONTRIBUTING.md).


### Release Policy

Releases of SlackRPG follow [Semantic Versioning](http://semver.org/) standards in a `MAJOR.MINOR.PATCH` versioning
scheme of the following format:

* `MAJOR` - modified when major, incompatible changes are made to the library,
* `MINOR` - modified when functionality is added in a backwards-compatible mannder, and
* `PATCH` - patches to existing functionality, such as documentation and bug fixes.


### License

Copyright &copy; 2015 Andrew Vaughan - Released under the [MIT license](LICENSE).





[repo-url]:         https://github.com/andrewvaughan/slackrpg
[screen-image]:     http://slackrpg.andrewvaughan.io/img/screen.png
[build-url]:        https://travis-ci.org/andrewvaughan/slackrpg
[build-image]:      https://travis-ci.org/andrewvaughan/slackrpg.svg?branch=master
[docs-image]:       http://inch-ci.org/github/andrewvaughan/slackrpg.svg?branch=master
[docs-url]:         http://inch-ci.org/github/andrewvaughan/slackrpg
[dependency-image]: https://david-dm.org/andrewvaughan/slackrpg.svg
[dependency-url]:   https://david-dm.org/andrewvaughan/slackrpg
[coverage-image]:   https://codeclimate.com/github/andrewvaughan/slackrpg/badges/coverage.svg
[quality-image]:    https://codeclimate.com/github/andrewvaughan/slackrpg/badges/gpa.svg
[quality-url]:      https://codeclimate.com/github/andrewvaughan/slackrpg
