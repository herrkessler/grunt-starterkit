module.exports = {
  dev: {
      files: [{
          expand: true,
          cwd: 'src/views',
          src: '*.jade',
          dest: 'dist/',
          ext: '.html'
      }],
      options: {
        pretty: true
      }
  },
  prod: {
      files: [{
          expand: true,
          cwd: 'src/views',
          src: '*.jade',
          dest: 'dist/',
          ext: '.html'
      }]
  },
};
