let ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractLESS = new ExtractTextPlugin('./public/css/[name].[hash].css');
module.exports = {
      entry: {
				'main':'./main.js',
				// 'news':'./js/news.js',
				// 'news_content':'./js/newscontent.js'
			},
      output: {
          path: __dirname, // 输出文件的保存路径
          filename: './public/js/[name].[hash].js' // 输出文件的名称
      },
	module: {
	loaders: [
	 //  {
		// test: /\.css$/,
		// loader: 'style!css!autoprefixer?{browsers:["last 2 version", "> 1%"]}',
	 //  },
			// { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer") }
			// ,
			// {test: /\.less$/i,  loader: ExtractTextPlugin.extract('style', 'css!less')},
			{
			    test : /\.(less|css)$/,
			    loader: ExtractTextPlugin.extract('style', 'css!less')
			},
			{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loaders: [
			  'babel?presets[]=react,presets[]=es2015,presets[]=stage-1'
			]
			}
			,

			{
				test: /\.json$/,
				loader: "json"
			}

		]
	}
	,
	plugins: [
	// new ExtractTextPlugin("./public/css/[name].css")
	// extractCSS,
	extractLESS
	]
	,
	// externals: {
	//       'react': 'React' ,
	//       'react-dom': 'ReactDOM' ,
	//       'jquery': 'jQuery'
	// }

}
