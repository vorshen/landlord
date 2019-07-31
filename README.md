# landlord
Web在线斗地主游戏

# 游戏大概样式
![游戏概况](./blog/img/1.2.png)

# 游戏运行
### 1.映射前端目录
如果是mac自带的的apache
```
sudo ln -s ${绝对路径}/html /Library/WebServer/Documents/${目录名}/
```

其实就是能通过WebServer的方式访问到html下的index.html即可
**注意，这里前端的端口号，不要和gameserver的一样（gameserver的在default.json中配置）**

### 2.修改访问地址和端口
```
vim config/default.json
```

自己配置端口和访问地址

### 3.前端构建
```
cd html/js
npm install
npm run dev
```

构建出dev代码

### 4.启动server
**只支持mac os或者linux，windows暂不支持**

直接启动
```
cd server
./server.out
```

重新编译
```
cd server
rm server.out
make
./server.out
```

必须用clang构建

### 5.设备访问到index.html即可

# Webassembly构建
默认已经编译好了wasm文件，html目录下puke.out.js和puke.out.wasm文件
如果想修改或者重新编译（依赖emscripten sdk）
```
cd assembly
emmake make
```

