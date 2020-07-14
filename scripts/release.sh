#!/usr/bin/env sh

set -e

# Install

npx lerna bootstrap

# npx lerna version prerelease --amend --conventional-commits
# npx lerna publish --canary --force-publish --yes --no-git-tag-version
npx lerna publish --force-publish --yes --no-git-tag-version

