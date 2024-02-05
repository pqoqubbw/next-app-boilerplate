import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

const RootLayout: FC<Readonly<Props>> = ({ children }) => {
  return children
}

export default RootLayout
