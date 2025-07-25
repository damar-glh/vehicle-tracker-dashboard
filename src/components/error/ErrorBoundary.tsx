import { AlertTriangle, Home } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { useNavigate } from 'react-router-dom'

export default function ErrorBoundary() {
  const navigate = useNavigate()
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
      <h1 className="text-4xl font-bold md:text-7xl">{getErrorTitle()}</h1>
      <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-xl">
        {getErrorDescription()}
      </p>
      <Button
        onClick={() => navigate('/')}
        size="lg"
        className="cursor-pointer px-8 py-6 text-base">
        <Home className="h-4 w-4" /> Go to Home
      </Button>
    </div>
  )
}
