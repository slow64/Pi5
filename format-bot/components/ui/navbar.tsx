"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

export function Navbar() {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const closeMenu = () => setIsOpen(false)

  const handleLogout = async () => {
    await logout()
    router.push("/FormatBot")
  }

  const navItems = [
    { name: "Home", href: "/FormatBot" },
    {
      name: "Serviços",
      href: "/FormatBot/servicos",
      submenu: [{ name: "Manutenção de Computadores", href: "/FormatBot/servicos/manutencao" }],
    },
    { name: "Cursos", href: "/FormatBot/cursos" },
    { name: "Equipe", href: "/FormatBot/equipe" },
    { name: "Sobre", href: "/FormatBot/sobre" },
    { name: "Blog", href: "/FormatBot/blog" },
    { name: "Contato", href: "/FormatBot/contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/FormatBot" className="flex items-center">
          <img src="/FormatBot/images/logo.png" alt="Format Soluções Logo" className="h-10 w-auto" />
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={closeMenu}
                            className="text-sm transition-colors hover:text-primary"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {user ? (
                  <div className="mt-4">
                    <p className="text-lg font-medium text-white">Olá, {user.username}</p>
                    <Button onClick={handleLogout} className="w-full mt-2">Sair</Button>
                  </div>
                ) : (
                  <div className="mt-4">
                    <Link href="/FormatBot/login">
                      <Button className="w-full">Login</Button>
                    </Link>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu>
            <NavigationMenuList className="space-x-3">
              {navItems.map((item) =>
                item.submenu ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="px-4 py-2">{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="font-medium px-4 py-2 hover:text-primary transition-colors">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
              <NavigationMenuItem>
                {user ? (
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-white">Olá, {user.username}</span>
                    <Button onClick={handleLogout} variant="ghost">Sair</Button>
                  </div>
                ) : (
                  <Link href="/FormatBot/login" legacyBehavior passHref>
                    <NavigationMenuLink className="font-medium px-4 py-2 hover:text-primary transition-colors">
                      Login
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  )
}


