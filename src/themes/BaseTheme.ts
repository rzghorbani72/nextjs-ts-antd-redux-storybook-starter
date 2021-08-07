const themeBase = {
  /* Fundamental Settings */
  space: [0, 4, 8, 12, 16, 24, 32, 56],
  breakpoints: ['37.5em', '63em', '80em'], // 600, 1008, 1280px
  rootFontSize: 16,
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 28, 32, 38, 48, 64, 72],
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  font: 'Arial,"Microsoft YaHei","微软雅黑","黑体",sans-serif,SimSun,"宋体",serif',
  colors: {
    black: '#000',
    white: '#fff',
  },
  borderWidths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  maxWidth: 1280,
  themeName: 'BaseTheme',
}

const theme = {
  ...themeBase,

  /* Dimensions, Paddings and Margins */
  sizes: {
    NavigationBar: {
      lineHeight: '2em',
      height: '60px',
      mobileHeight: '44px',
    },
  },

  /* Color Palette */
  palette: {
    /**
     * 在此可以定义不同模块颜色，如 Footer, News, Sport
     */
    NavigationBar: {
      background: themeBase.colors.white,
    },
  },
}

export default theme
