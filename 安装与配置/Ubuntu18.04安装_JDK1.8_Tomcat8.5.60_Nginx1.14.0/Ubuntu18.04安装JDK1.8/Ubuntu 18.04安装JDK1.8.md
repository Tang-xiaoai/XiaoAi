[参考链接](https://blog.csdn.net/weixx3/article/details/80296779)

## 1.下载

[JDK1.8下载官网地址](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

## 2.安装
（1）移动到相应文件夹下，把安装包解压
```
mv jdk-8u144-linux-x64.tar.gz /opt/software
tar -zxvf /opt/software/jdk-8u144-linux-x64.tar.gz -C /opt/module/jdk1.8.0_144
```
（2）设置环境变量，`vim /etc/profile`,增加25-29行
```
export JAVA_HOME=/opt/module/jdk1.8.0_144
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=.:${JAVA_HOME}/bin:$PATH
```
![配置环境变量](https://img-blog.csdnimg.cn/20201212153259930.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0ZpZ2h0aW5nVGFuZw==,size_16,color_FFFFFF,t_70)
（4）立即生效
`source /etc/profile`
![配置的环境变量立即生效](https://img-blog.csdnimg.cn/20201212153259871.png)
（5）检查安装结果
`java -version`
![查看JDK版本](https://img-blog.csdnimg.cn/20201212153259927.png)

