
module.exports = {
  // Other Webpack options...

  module: {
    rules: [
      // Other rules...

      // Add a rule for PDF files
      {
        test: /\.pdf$/,
        use: 'file-loader'
      }
    ]
  }
};