import TopList from '@/app/components/TopList'
import { Header, Footer } from '@/app/components/Navigation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-32 !pt-32">
      <Header />
      <TopList liveData />
      <Footer />
    </main>
  )
}