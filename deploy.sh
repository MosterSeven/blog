npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git config user.name "mosterseven"
git config user.email "1144813094@qq.com"
git commit -m 'deploy'

git push -f https://gitee.com/mosterseven/blog.git master:doc-pages

cd ..
rmdir /Q /S dist

