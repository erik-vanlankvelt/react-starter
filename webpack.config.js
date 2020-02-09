const path = require("path");
const webpack = require("webpack");

module.exports = {
  // entry: Where the application starts and where to start bundling files.
  entry: "./src/index.js",
  mode: "development",
  /* module: Defines how exported javascript modules are transformed 
  and which ones are included according to the given array of rules. */
  module: {
    rules: [
      {
        // Use babel to transform our ES6 and JSX syntax (.js and .jsx files).
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
      {
        /* use: Add style-loader and css-loader
        because we’re not pre-or-post-processing our CSS. 
        css-loader requires style-loader in order to work. */
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  /* resolve: specify which extensions webpack will resolve and
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