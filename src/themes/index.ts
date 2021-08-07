import BaseTheme from './BaseTheme'

const loadThemeByColorSchema = (colorSchema: string) => {
  switch (colorSchema) {
    /**
     * 可以在此添加不同主题类别
     * case 'Sport':
     * case 'News':
     */
    default:
      return BaseTheme
  }
}

export { BaseTheme, loadThemeByColorSchema }
