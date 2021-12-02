# MapleStory WZ 资源服务器

## todo list

- [ ] 从 Base.wz 的文件开始，生成所有的 xml 或 json 文件
- [ ] 目前这个 json 文件的格式整体来说效率比较低，虽然比 xml 好。要思考一下是否有更加简介和易用的格式
- [ ] 生成所有的文件下，应该可以直接托管到 Nginx 去维护这些素材资源即可。在目录处再新增版本好。
- [ ] 脚本化以上的工作

## Usage

通过 Harepacker 工具，导入 WZ 文件，并通过 工具-导出选中-XML-Classic 将数据导出到 datafile 目录中，导出结构按层级结构进行。由于版权关系，这里不会保存或提供 maplestory 的任何资源，大家可以前往 maplestory 的客户端目录获取对应的资源。

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
