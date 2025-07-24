import { Link } from 'react-router-dom'
import { AlertTriangle, Home } from 'lucide-react'

export default function ErrorBoundary() {
  let errorStatus: number | undefined

  const getErrorTitle = () => {
    switch (errorStatus) {
      case 404:
        return 'Page Not Found'
      case 401:
        return 'Unauthorized'
      case 403:
        return 'Forbidden'
      case 500:
        return 'Server error'
      default:
        return 'Something went wrong'
    }
  }

  const getErrorDescription = () => {
    switch (errorStatus) {
      case 404:
        return "The page you're looking for doesn't exist or has been moved."
      case 401:
        return 'You need to log in to access this page.'
      case 403:
        return "You don't have permission to access this resource."
      case 500:
        return 'Our servers are experiencing issues. Please try again later.'
      default:
        return "The page you're looking for doesn't exist or has been moved."
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <AlertTriangle className="h-20 w-20 text-red-600" />
      <h1 className="text-5xl font-black">{getErrorTitle()}</h1>
      <p className="text-base">{getErrorDescription()}</p>
      <Link
        to="/"
        className="inline-flex h-10 items-center gap-3 rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:ring-1 focus-visible:ring-gray-950 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
        <Home className="h-4 w-4" /> Go to Home
      </Link>
    </div>
  )
}
