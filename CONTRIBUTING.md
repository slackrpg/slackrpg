# Contributing

SlackRPG would not exist without its contributors, and we welcome you to join us in our endeavor.  This guide is
intended for anyone who wants to contribute to the [SlackRPG](http://github.com/andrewvaughan/slackrpg)
project. Please read this document carefully before contributing, as it answers many of the questions that new
contributors have when first working with our projects.


## Agreement

By submitting any work to the SlackRPG project, you agree to our [open-source license](LICENSE) as well as to
the following principal guidelines:

1. Any work contributed is original work or you otherwise have the right to submit the work;
1. You grant the SlackRPG project a non-exclusive, irrevocable license to use your submitted code in any way; and,
1. You are capable of granting these rights for the contribution.


## Ways to Contribute

There are many ways to contribute to the SlackRPG repository:

* **Report a Bug** - if you find a bug, please [file a detailed issue](#bug-reports)
* **Request a Feature** - if you want to request a feature, please [file a request](#feature-requests)
* **Work on an Issue** - if you wish to contribute directly, please feel free to work on [any open issue](#working-on-issues)


### Bug Reports

Perfect code is rare, and SlackRPG is no exception.  If you find a bug, or feel something is acting strangely,
please [file an issue](https://github.com/andrewvaughan/slackrpg/issues/new) so that it can be addressed.  When
filing an issue, please provide the following information:

* What state (version, etc) the application was in, if known
* What you did
* What you expected to happen
* What actually happened


### Feature Requests

We love ideas of any form.  Even if you can't add a feature on your own, we welcome all suggestions.  When making a
feature request, please [file an issue](https://github.com/andrewvaughan/slackrpg/issues/new) and provide the
following information:

* The problem you want to solve
* Your take on the correct solution to the problem


## Working on Issues

All bugs and features are stored in our [GitHub Issues](https://github.com/andrewvaughan/slackrpg/issues)
section. It is here that we determine which issues will be roadmapped for various releases, and plan our
[milestones](https://github.com/andrewvaughan/slackrpg/milestones) accordingly.  All issues that are received
will be reviewed by the core development staff and assigned a milestone for release.

If you intend to work on a specific issue, please add a comment to the issue saying so and indicate when you think
you will complete it.  This will help us to avoid duplication of effort.  If you find that you cannot finish the work,
simply add a comment letting people know so someone else can pick it up.


### Pull Requests

All contributions to the SlackRPG repository must go through a
[GitHub Pull Request](https://github.com/andrewvaughan/slackrpg/pulls).  In addition, all Pull Requests must be
directly related to an open issue.  All pull requests should follow a very specific process:

**1. Open or choose an issue to work on**

Before working, please identify or create an issue for what you are looking to contribute.  **Do note** that only
accepted issues will be merged, and if your issue is not slated for a milestone it may not be accepted.  You may
request that the issue be identified for release before you begin working.

**2. Announce that you will be working on that issue**

Let us know when you plan to start on the issue and how long you think it will take you.  This will help us be ready
to support you when it comes time to review.

**3. Fork the SlackRPG repository**

Every contributor, including our core staff, are required to work within a fork of their own repository.  All branches
on the SlackRPG repository are meant for production purposes only.

**4. Add the SlackRPG upstream remote**

In order to keep your code up to date with master, you need to add the Gizmobodo repostiory as your upstream:

```bash
git remote add upstream https://github.com/andrewvaughan/slackrpg
```

**5. Ensure that your master branch is up to date with the upstream**

```bash
git checkout master
git pull upstream master
```

**6. Create a new branch**

Create a branch on your local repository that has a descriptive name of what you are fixing, such as:

```bash
git checkout -b fix-broken-config
git push -u origin fix-broken-config
```

**7. Make your changes**

Make your changes, commit, and add tests!  All features must be tested to completion before they will be accepted.
This project makes use of JSHint, ESLint, and Mocha to provide thorough testing and code-style rules to ensure
consistency accross the project.

Please refer to our [code standards](#code-style-requirements) to save yourself time when linting!

**8. Rebase onto upstream**

Before you send a pull request, be sure to rebase onto the upstream source.  This ensures your code is running on
the latest available code.

```bash
git fetch upstream
git rebase upstream/master
```

**9. Ensure all tests pass**

After rebasing, be sure to run the test suite to make sure nothing is broken:

```bash
npm test
```

**10. Squash your commits**

Commits on the production environment are used as a changelog for releases.  As such, commits must be 
[squashed](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html) to a single commit before being
accepted.

On the last step of your rebase, all commit messages must follow a specific standard to be accepted:

```
Tag: Message (fixes #issueno)
```

In this case, `Tag` is one of the following:

* `Fix` - for a bug fix
* `Update` - for any update to existing functionality
* `New` - for any new functionality
* `Docs` - for documentation updates
* `Build` - for changes to build or automation
* `Upgrade` - for dependency upgrades

Generally you can find this tag as one of the labels on the issue you are fixing.  The `Message` should be a
one-sentence description of the change.  Finally, the issue number the Pull Request represents should be mentioned at
the end.  If the commit does not completely resolve the issue, please use `(refs #1234)` instead of `(fixes #1234)`.

Here are some good examples:

```
Build: Added Node 0.12 to Travis-CI config (fixes #19)
Fix: Resolved bug due to missing semicolon (fixes #220)
Upgrade: Upgraded Should node package from ~5.1.0 to ~6.0.0 (fixes #999)
```

**11. Send the Pull Request**

You're ready to send your pull request!  Refer to the
[GitHub documentation](https://help.github.com/articles/creating-a-pull-request) on how best to send a pull request
from your fork.

**12. Watch for status**

All pull requests are sent through [Travis-CI](https://travis-ci.org/andrewvaughan/slackrpg) to ensure tests and
standards are passed.  If the build passes or fails, it will show up on the pull request.  We cannot accept any Pull
Requests that fail a Travis-CI build, so if that happens, please fix and re-squash your commits, and then update the
Pull Request to trigger another build.


## Code Style Requirements

All Javascript code provided to SlackRPG must follow a strict set of code standards to prevent unnecessary
commit logs from being introduced due to formatting.  As such, a [ESLint](http://eslint.org/) and
[JSHint](http://jshint.com/) series of check rules are in place to enforce these standards.

Before submitting a pull request, `npm test` must be run, provide full coverage of functionality, and successfully
pass before a request will be reviewed.

More details on code style can be found in the comments within the [.eslintrc](.eslintrc).


### Changes to Code Style

With every Pull Request, the core team has the opportunity to better refine our code style guidelines.  As such, you
may be requestsed to pull an updated set of code style guidelines due to an unforseen inconsistency in submitted code,
and to resubmit your request according to the new guidelines.