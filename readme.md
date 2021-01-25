# readme文档
- 项目说明文档
- 一般都与项目放一起


# git操作

## 初始化版本库
- git init
- 初始化成功后，当前目录有(master)
- 初始化成功后当前目录下有隐藏文件，不要操作这个文件

## 工作区
- 持有实际文件
- 我们平时增删改查的文件都是工作区

## 提交到暂存区
- 可以理解为我们看不到的一个地方
- 本地仓库的一个主要分支
- 是存在于用户电脑中的

## 本地仓库 
- 也可以理解为我们看不到的一个地方
- 是存在于用户电脑中的
- 用于存储项目代码及版本的项目记录等信息

## 提交到暂存区
- git add 文件名
-将工作区的变动提交到暂存区
- git add .  将所有的变动

## 查看工作去和暂存区的状态（增删改）
- git status

## 提交到本地仓库
- git commit -m '提交注释'
- 将代码从暂存区提交到本地仓库
- git status 查看状态：工作区 是干净的，没有任何东西可提交

## 查看
1. git init
2. git add .
3. git commit -m

## 查看状态
- git status
- 查看工作区和暂存区的状态（增删改）

## 查看日子
- git log
- git reflog

## 版本回退
- git reset --hard^ 回退到上一个版本
- git reset --hard 版本号 回退到指定版本
- 注意把当前代码先提交到本地仓库

## 查看变动
- git diff 文件名
- 会列出该文件前后差异


## 创建远程仓库
- 进入 github官网
- 创建一个新的远程仓库

## 将本地仓库与 远程仓库关联
- git remote add origin 你的远程仓库地址
- git remote -v 设置默认的提交地址和分支

## 正常提交（非第一次提交）
- git add . 提交到暂存区
- git commit =m '注释' 提交到本地仓库
- git pull 先跟新到本地
- git push 提交到远程仓库

## 修改关联
- git remote rm origin
- git remote add origin ssh地址

## 其他人修改
咻咻咻

git init
git add .
git commit -m ''