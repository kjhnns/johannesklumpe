import Typography from 'typography'

const typography = new Typography({
  title: 'Default',
  baseFontSize: '21px',
  baseLineHeight: 1.6,
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
  scaleRatio: 2.441,
  headerWeight: 600,
  bodyWeight: 100,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
    a: {
      color: 'hsl(215, 17%, 30%)',
    },
  }),
})

export default typography
