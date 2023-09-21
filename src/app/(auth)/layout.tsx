import { ReactNode } from "react"

interface AuthProps{
    children : ReactNode
}

const AuthLayout :React.FC<AuthProps> = ({ children}) => {
  return (
    <div className="bg-slate-200 p-10 rounded-md">{children}</div>
  )
}

export default AuthLayout