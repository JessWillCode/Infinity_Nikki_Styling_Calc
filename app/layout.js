import './globals.css'

export default function RootLayout(props) {
  const { children } = props
  return (
    <html suppressHydrationWarning data-theme='dracula'>
      <body>
      {/*navbar*/}
      {/*<div className='navbar '></div>*/}
        {children}
      {/*footer*/}
      </body>
    </html>
  )
}