# MapleStory WZ 资源服务器

## Usage

通过 Harepacker 工具，导入 WZ 文件，并通过 工具-导出选中-XML-Classic 将数据导出到 datafile 目录中，导出结构按层级结构进行。

```
curl --location --request GET 'http://localhost:8082/Base.wz/zmap.img.xml'
```

获取 json 数据。

## feature
* dockerfile 自动打包

## BUG

* 第一次转化文件时，会出现 No found，可能是文件的读写的异步造成的。


## 感谢

这里的工作都是基于：https://github.com/diamondo25/webstory 这个项目进行的，感谢作者的付出。