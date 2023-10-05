"use client"
import { Menu, MonitorCheck, Moon, Sun } from "lucide-react"
import Container from "./ui/Container"
import { Button } from "./ui/button"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
const routes = [
  {
    "href": "/hosts/homelab",
    "label": "Homelab",
  },
  {
    "href": "/hosts/proxmox",
    "label": "Proxmox",
  },
  {
    "href": "/hosts/cloud",
    "label": "Cloud",
  },
]

const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0"><h1 className="text-xl font-bold">EZMonitor</h1></Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((routes, i) => (
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  href={routes.href}
                  className="text-sm font-medium transition-colors"
                >
                  {routes.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Services"
            >
              <span className="sr-only">Services</span>
              <MonitorCheck className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mr-6"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <span className="sr-only">Toggle Theme</span>
              <Moon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Sun className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
