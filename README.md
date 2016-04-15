# mini-eqxiu

这篇文章旨在逐步建立一个类似易企秀的H5编辑器和浏览器。与易企秀不同的是这次使用了最流行的react、webpack等技术。

这篇文章对于初学者可以当做学习react的入门级文章，对于高手也会暴露出一些不完善的功能点希望大虾们能倾力贡献代码。

易企秀成立一年多的时间里，虽然代码并不是最完美的，仍然有很多抄袭者、卖代码者，不断的侵害我们辛辛苦苦的知识产权。我们想与其这样，不如我们开放代码，与同行们一起探索和成长。

如果想先睹为快，可以先clone以下仓库得到
```
git clone https://github.com/eqxiu/mini-eqxiu.git
```


废话少说，先上第一步：

## step-0 搭建react环境

*运行以下命令得到step-0的代码：*
```
git checkout -f step-0
```

建立一个npm project
```javascript
mkdir mini-eqxiu
cd mini-eqxiu
npm init -y
```

建立一个index.html，放在dist目录下
```html
<!DOCTYPE html>
<html>
<body>
  <div id="app"></div>
  <script src="bundle.js"></script>
</body>
</html>
```

index.html只包含了一个div将来用于插入我们的app，此外引入了bundle.js

接着我们写一个index.js放到src目录下，并且输出一个log便于测试
```javascript
console.log('I am alive');
```

安装webpack和webpack-dev-server，用来打包和调试程序
```
npm install --save-dev webpack webpack-dev-server
```

对应的，建立webpack.config.js
```javascript
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

现在你应该已经可以运行webpack了
```
webpack
```

你也可以启动server来查看效果，运行下面的命令后打开http://localhost:8080，再打开debug工具，刚才的那句I am alive应该打印出来了
```
webpack-dev-server
```

接下来，为了使用es6和react jsx，我们还要安装以下babel包
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

在package.json中，我们需要激活Babel的功能
```json
"babel": {
  "presets": ["es2015", "react"]
}
```

同样在webpack的配置文件中，我们也要添加Babel的支持
```javascript
 module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
```

最后，安装react相关的包
```
npm install --save react react-dom
```

下面这个工具可以实现重新加载代码时不丢掉当前的state
```
npm install --save-dev react-hot-loader
```

为了实现它还需要同步修改webpack配置文件，加入hot-loader功能。step-0的最后，完整的webpack配置文件如下：
```javascript
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
```

至此最简单的react开发环境已经建立好了。

在step-1我们将用react建立UI组件，显示出一段文本和一张图片


#step-1 显示一段文和一张图片

*运行以下命令得到step-0的代码：*
```
git checkout -f step-0
```

易企秀的核心在于维护一个H5场景的描述文件，描述文件定义了一个H5场景中有多少页面、每个页面有多少组件、组件的样式和位置等等内容。编辑器生成描述文件，浏览器再解析描述文件展现成H5页面。

在step-1我们将mock一个最简单的H5场景描述文件，里面只包含一页，页中有一段文本和一张图片：
```json
[
    {
      "id": 437340633,
      "elements": [
        {
          "content": "点击此处进行编辑",
          "id": 5231947155,
          "type": 2
        },
        {
          "id": 8702727303,
          "properties": {
            "src": "http://img3.imgtn.bdimg.com/it/u=182029021,3826628846&fm=21&gp=0.jpg",
          },
          "type": 4
        }
      ]
    }
]
```

第一步，先想想我们需要哪些组件。首先我们需要最外面的容器，代表一个场景；场景中有1-n个页面；页面中有0-n个组件：
```
└── Scene              场景
    ├── Page           页
    ├── Page           页
    └── Page           页
        ├── Element    组件
        └── Element    组件


```

写第一个jsx，index.jsx，为了方便暂时把mock的数据写在这里。(现在可以删掉之前测试用的index.js了)。
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './components/Scene';

const mockdata = [
    {
      "id": 437340633,
      "elements": [
        {
          "content": "点击此处进行编辑",
          "id": 5231947155,
          "type": 2
        },
        {
          "id": 8702727303,
          "properties": {
            "src": "http://img3.imgtn.bdimg.com/it/u=182029021,3826628846&fm=21&gp=0.jpg",
          },
          "type": 4
        }
      ]
    }
];

ReactDOM.render(
  <Scene def={mockdata} />,
  document.getElementById('app')
);
```

然后依次建立其它几个UI组件：
```javascript
import React from 'react';
import Page from './Page';

export default React.createClass({
  getPages: function() {
    return this.props.data || [];
  },
  render: function() {
    return <div className="scene">
      {this.props.data.map(entry =>
        <Page key={entry.id} def={entry}/>
      )}
    </div>;
  }
});
```

```javascript
import React from 'react';
import Element from './Element';

export default React.createClass({
  render: function() {
    return <div className="page">
      {this.props.def.elements.map(entry =>
        <Element key={entry.id} def={entry}/>
      )}
    </div>;
  }
});
```

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';
import Image from './Image';

export default React.createClass({
  getElementByType: function(elementDef) {
  	switch (elementDef.type + '') {
  		case '2':
  			return <Text def={elementDef}/>;
  		case '4':
  			return <Image def={elementDef}/>;
  		default:
  	}
  },
  componentDidMount: function() {
    var dom = ReactDOM.findDOMNode(this);
    var styles = this.props.def.css;
    for(var key in styles) {
    	dom.style[key] = styles[key];
    }
    console.log(dom);
  },
  render: function() {
    return <div className="element">
    	{this.getElementByType(this.props.def)}
    </div>;
  }
});
```