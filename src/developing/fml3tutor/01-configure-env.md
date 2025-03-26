# 第一章 - 环境配置

::: info
我们假定你已经安装好了 Java 17 和 Intellij IDEA 并且安装了插件 Minecraft Development Kit。
:::

## 第一节 文件准备 Windows 篇

::: info
Linux 用户看下面那节
:::

1. 下载 [fml-loom-0.1.local-repo.zip](https://github.com/XiaoYuOvO/fml-loom/releases/download/0.1/fml-loom-0.1.local-repo.zip) 备用。
2. 在 `C:\Users\用户名` 创建 `.m2` 文件夹并在里面创建 `repository` 文件夹。
3. 将之前下载的 `fml-loom-0.1.local-repo.zip` 解压到你刚刚创建的文件夹。
4. 获取 MITE 核心和资源包备用。(你可能还会需要 FishModLoader 的 jar 文件)

## 第二节 文件准备 Linux 篇

::: info
Windows 用户无视此节
:::

1. 下载 [fml-loom-0.1.local-repo.zip](https://github.com/XiaoYuOvO/fml-loom/releases/download/0.1/fml-loom-0.1.local-repo.zip) 备用。
2. 在 `/home/用户名` 创建 `.m2` 文件夹并在里面创建 `repository` 文件夹。
3. 将之前下载的 `fml-loom-0.1.local-repo.zip` 解压到你刚刚创建的文件夹。
4. 获取 MITE 核心和资源包备用。

## 第三节 创建项目

1. 下载 `https://github.com/MinecraftIsTooEasy/hellofml` 项目。
2. 在项目根目录下运行 `./gradlew genSources` 并等待完成。(Windows 为 `gradlew.bat genSources`)
3. 使用 Intellij IDEA 打开项目并等待完成。
4. 你可能会在创建过程中遇到问题，下面是解决方案:
   1. Java版本过低(例如8), 进入设置, 项目结构, 将SDK和语言水平设为17。(你可能还需要设置一下 Gradle 使用的 JDK 版本。)
   2. FishModLoader目录不对, 进入构建脚本, 将相关路径改为你在上节准备的.
   3. 找不到MITE-1.6.4.jar文件, 根据报错给的目录, 将你在上节准备的文件移动过去.
   
::: info
教程施工中，请耐心等待哦
:::