#!/usr/bin/env sh

set -e

# Install

npx lerna bootstrap

# npx lerna version prerelease --amend --conventional-commits
npx lerna publish --canary --force-publish --yes --no-git-tag-version
# npx lerna publish --force-publish --yes --no-git-tag-version

# build vue3-demo
cd packages/vue3-demo

yarn build

# build vue3
cd ../vue2-demo

yarn build
