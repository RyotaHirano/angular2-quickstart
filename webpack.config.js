module.exports = {
  entry: {
    main: "./app/main",
    html: "./index.html",
    css: './style.css'
  },
  output: {
    path: __dirname,
    filename: "./dst/[name].js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: /node_modules/
      },
    ]
  }
};

