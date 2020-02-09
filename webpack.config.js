const path = require("path");
const webpack = require("webpack");

module.exports = {
  // entry: Where our application starts and where to start bundling our files.
  entry: "./src/index.js",
  mode: "development",
  /* module: Helps define how exported javascript modules are transformed 
  and which ones are included according to the given array of rules. */
  module: {
    rules: [
      {
        /* Transform our ES6 and JSX syntax,
        test and exclude properties are conditions to match the file against. */
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        // Use babel for transforming our .js and .jsx files.
        options: { presets: ["@babel/env"] }
      },
      {
        /* Add style-loader and css-loader to the use property,
        because we’re not pre-or-post-processing our CSS. 
        css-loader requires style-loader in order to work. */
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  /* resolve: specify which extensions Webpack will resolve and
  import modules without needing to add their extensions. */
  resolve: { extensions: ["*", ".js", ".jsx"] },
  // output: tells webpack where to put our bundled code.
  output: {
    path: path.resolve(__dirname, "dist/"),
    /* publicPath: specifies what directory the bundle should go in and
    tells webpack-dev-server where to serve files from.  
    It also specifies the public URL of the the directory. */
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  /* devServer: the location we’re serving static files from
  and the port we want to run the server on. */
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    // publicPath: tells the server where the bundled code is.
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  // HotModuleReplacement: Automatic refreshes after changes.
  plugins: [new webpack.HotModuleReplacementPlugin()]
};