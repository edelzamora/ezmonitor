"use client"
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/Container'

export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div className="flex items-center">
            <h1>Welcome to EZMonitor</h1>
          </div>
          <Button size='lg'>Click</Button>
        </div>
      </div>
    </Container>
  )
}
