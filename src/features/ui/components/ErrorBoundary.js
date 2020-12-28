import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { fallback: Fallback, children } = this.props

    if (hasError) return <Fallback />

    return children
  }
}

export default ErrorBoundary
