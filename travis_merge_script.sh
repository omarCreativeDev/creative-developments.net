#!/bin/bash -e
export GIT_COMMITTER_EMAIL='travis@travis'
export GIT_COMMITTER_NAME='Travis CI'

# Since Travis does a partial checkout, we need to get the whole thing
repo_temp=$(mktemp -d)
git clone "https://github.com/$GITHUB_REPO" "$repo_temp"

# shellcheck disable=SC2164
cd "$repo_temp"

printf 'Checking out %s\n' master >&2
git checkout master

printf 'Merging %s\n' "$TRAVIS_COMMIT" >&2
git merge --ff-only "$TRAVIS_COMMIT"

printf 'Pushing to %s\n' "$GITHUB_REPO" >&2

push_uri="https://$GITHUB_TOKEN@github.com/$GITHUB_REPO"

# Redirect to /dev/null to avoid secret leakage
git push "$push_uri" master >/dev/null 2>&1
git push "$push_uri" :"$TRAVIS_BRANCH" >/dev/null 2>&1
