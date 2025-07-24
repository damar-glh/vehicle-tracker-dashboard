import { createRoot } from 'react-dom/client'
import './index.css'
import router from '@/routes/routes.ts'
import { RouterProvider } from 'react-router'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
