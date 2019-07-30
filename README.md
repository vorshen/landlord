# landlord
Web在线斗地主游戏

# 游戏大概样式
![游戏概况](./blog/img/1.2.png)

# 游戏运行
## 1.映射前端目录

## 2.修改访问地址

## 3.前端构建
```
cd html/js
npm install
npm run dev
```

## 4.启动server
```
cd server
./server
```

重新编译
```
cd server
rm server
make
./server
```

## 5.设备访问到index.html即可

# Webassembly构建
默认已经编译好了wasm文件，html目录下puke.out.js和puke.out.wasm文件
如果想修改或者重新编译（依赖emscripten sdk）
```
cd assembly
emmake make
```

