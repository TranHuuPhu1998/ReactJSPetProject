const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#2887C7',
              '@border-radius-base': '4.5px',
              '@btn-border-radius-base': '54px',
              '@border-color-base': '#C3CCD5',
              '@border-width-base': '1.125px',
              '@input-height-base': '48px',
              '@font-size-base': '16px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
