import Navbar from '@/components/nav/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/footer/Footer'

const DefaultLayout = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
