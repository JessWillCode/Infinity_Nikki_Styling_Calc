import { Provider } from "@/components/ui/provider"
import './globals.css'

export default function RootLayout(props) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}