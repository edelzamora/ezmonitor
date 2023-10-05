"use client"
import Container from "./ui/Container"
import { Button } from "./ui/button"
import Link from "next/link"
import Counter from '@/components/Counter'


const Bar = ({ host }) => {
  let tableName = host.charAt(0).toUpperCase() + host.substring(1)
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href={`/hosts/${host}`} className="ml-4 lg:ml-0"><h1 className="text-xl font-bold">{tableName} Table</h1></Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            <div className="flex items-center gap-4">Time until refresh:  <Counter /> seconds</div>
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="lg"
              className="mr-2"
              aria-label="Homelab"
            >Refresh
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Bar
