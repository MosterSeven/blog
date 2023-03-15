#!/usr/bin/env sh

# set -e

npm run docs:build

$env:NODE_OPTIONS="--openssl-legacy-provider"

npm run docs:build

cd docs/.vuepress/dist

git checkout -b doc-pages 

git init
git add -A
git config user.name "mosterseven"
git config user.email "gao1144813094@gmail.com"
git commit -m 'deploy'

# git push -f https://gitee.com/mosterseven/blog.git master:doc-pages
git push -f https://github.com/MosterSeven/blog.git main:doc-pages

cd ..
rmdir /S /Q dist

