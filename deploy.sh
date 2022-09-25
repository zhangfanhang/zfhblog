#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build 
# 上传静态资源到阿里云OSS
node upload.js 
# 部署到服务器
# node deploy.js 
# 进入生成的文件夹s
cd ./dist 
# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:zhangfanhang/zfhblog_dist.git
else
  msg='来自github action的自动部署'
  githubUrl=https://zhangfanhang:${GITHUB_TOKEN}@github.com/zhangfanhang/zfhblog_dist.git
  git config --global user.name "zhangfanhang"
  git config --global user.email "543629463@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github

cd -
# 部署成功提醒
node pushDeer.js

rm -rf ./dist

