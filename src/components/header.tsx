'use client';

import paths from "@/paths";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

export default function App() {
  const currentPathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: paths.home() },
    { title: "Projetos", href: paths.projects() },
    { title: "Escritório", href: paths.office() },
    { title: "Sobre", href: paths.about() },
    { title: "Contato", href: paths.contact() },
  ];

  return (
    <Navbar
      isBordered
      isBlurred={true}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="py-8 bg-neutral-100/70 shadow-lg"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <Image
            src="/viviane-logo.png"
            alt="Viviane Corrêa Logo"
            className="w-32"
            width={128}
            height={64}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <Image
            src="/viviane-logo.png"
            alt="Viviane Corrêa Logo"
            className="w-36"
            width={144}
            height={64}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 uppercase" justify="end">
      {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} isActive={currentPathname === item.href}>
            <Link
              href={item.href}
              className="text-neutral-500 hover:text-neutral-950 antialiased"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarMenu className="mt-[64px] items-center justify-center max-h-52 py-4 bg-neutral-100 border-b border-b-neutral-400">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-neutral-500 hover:text-neutral-950 antialiased"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
