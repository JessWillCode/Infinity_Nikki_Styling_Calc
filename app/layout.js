import './globals.css'

export default function RootLayout(props) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}