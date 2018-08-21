# Angular6 + NG-Zorro 1.x + Proxy
使用Angular6+ng zorro搭建的一个环境，设置了使用代理。
通过不同的代理设置，可以通过不同的启动脚本实现代理不同环境，如dev/test/...

## 使用说明
不同的启动脚本代理到不同服务器

npm start               //默认代理到proxy/dev.json

npm run start:test  //代理到proxy/test.json

同理可以设置代理到其他环境

## 代理设置

proxy/dev.json
proxy/test.json

package.json script下相应设置
"scripts": {
    "start": "ng serve --proxy-config proxy/dev.json",
    
    "start:test": "ng serve --proxy-config proxy/test.json",
}
