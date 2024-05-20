import StyledComponentsRegistry from "@/lib/registry"
import GlobalStyles from "@/styles/GlobalStyles"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pet Care",
  description: "App for Taking Care of Your Pet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>
          <div className={inter.className}>{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
