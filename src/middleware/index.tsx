import { FC, ReactNode } from 'react'
import { MIDDLEWARE_LIST } from '@constants/middleware'

interface MiddlewareDefine {
  name: string
  props?: any
}

interface MiddlewareProps {
  listMiddleware: Array<MiddlewareDefine>
  children: ReactNode
}

const Middleware: FC<MiddlewareProps> = ({ listMiddleware, children }) => {
  let component = children

  for (const item of listMiddleware) {
    const MiddlewareComponent = MIDDLEWARE_LIST?.[item.name]
    component = (
      <MiddlewareComponent {...item.props}>{component}</MiddlewareComponent>
    )
  }

  return component
}

export default Middleware
