# MapleStory WZ 资源服务器

## Usage

通过 Harepacker 工具，导入 WZ 文件，并通过 工具-导出选中-XML-Classic 将数据导出到 datafile 目录中，导出结构按层级结构进行。

```
curl --location --request GET 'http://localhost:8082/Base.wz/zmap.img.xml'
```

获取 json 数据。