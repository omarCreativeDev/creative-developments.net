#!/usr/bin/env bash
export GIT_COMMITTER_EMAIL="travis@travis-ci.com"
export GIT_COMMITTER_NAME="Travis CI"
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
git checkout master || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit
git push @github.com/">https://${GITHUB_TOKEN}@github.com/omarCreativeDev/creative-developments.net.git
