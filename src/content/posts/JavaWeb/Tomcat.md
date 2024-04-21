---
title: 关于Tomcat中startup.bat闪退问题
published: 2024-04-21
description: JavaWebKaifa
tags: [Blog, 技术笔记, JavaWeb, Tomcat]
category: JavaWeb
draft: false
---

# 问题及解决方法

## A.8080端口被占用了

1. 对于Windows系统，打开cmd，输入
    ```bash
    netstat -ano | findstr "8080"
    ```
    
    查看哪一个进程PID占用了8080端口
    
1. 在任务管理器找到相应的进程并删除

    

## B.Java环境变量配置问题（我碰到的）

1. 在系统变量中新建一个变量叫做JAVA_HOME

   ![image-20240421131705863](https://raw.githubusercontent.com/PasserByNaOH/PicGo/main/blogPic/image-20240421131705863.png)

2. 在Path中按步骤添加
   ![image-20240421131929217](https://raw.githubusercontent.com/PasserByNaOH/PicGo/main/blogPic/image-20240421131929217.png)
   
3. 双击startup.bat，启动成功！

   ![image-20240421132159473](https://raw.githubusercontent.com/PasserByNaOH/PicGo/main/blogPic/image-20240421132159473.png)



