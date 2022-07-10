@REM 生成静态文件
echo building...
call yarn run docs:build
echo building to git...
cd docs/.vuepress/dist
call git init
call git add -A
call git config user.name "mosterseven"
call git config user.email "1144813094@qq.com"
call git commit -m 'deploy'
@REM 部署到一个单独的分支,之后Gitee page 页面直接选中 doc-pages 分支，点击更新部署即可。
call git push -f https://gitee.com/mosterseven/blog.git master:doc-pages
echo push git finish...
@REM 部署完了之后删除dist文件
cd ..
rmdir /Q /S dist

