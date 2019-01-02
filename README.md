
#### 初始化项目


#### 安装依赖

```bash
$ cd Website
$ npm install
```
#### 运行开发环境,运行成功打开浏览器http://localhost:1234即可查看项目

```bash
$ npm run dev
```

#### 打包编译
```bash
$ npm run build
```

#### 开发
目录结构
```js
src
├── router
    ├── index.js
├── assets
    ├── 
├── components
	├── 
	├── index.js
├── views
    ├──
├── store
    ├── global
        ├── global.js
        ├── index.js
    ├── index.js
├── app.vue
├── index.js
```

只需要执行`npm run dev` 和 `npm run build` 就可以进行开发和构建。

#### 路由懒加载
只需将传统 import page from 'path' 方式改为 const page = () => import('path') 即可
```bash
// 此种方式路由不会懒加载
import HelloWorld from '../views/HelloWorld/HelloWorld.vue'
// 此种方式引入即可实现路由懒加载,打包时js文件自动拆分
const HelloWorld =  () => import('../views/HelloWorld/HelloWorld.vue')
```

#### nodejs版本升级,如果您的node版本低于8.0,我们强烈建议您升级node版本(命令行升级不支持windows)

```bash
$ npm install -g n
$ n stable
```

