#!/bin/bash

# 检查是否提供了提交注释
if [ $# -eq 0 ]; then
    echo "Usage: $0 <commit message>"
    exit 1
fi

# 添加所有文件到暂存区
git add .

# 提交文件并添加提交注释
git commit -m "$1"

# 推送提交到远程仓库
git push

echo "Files committed and pushed successfully."