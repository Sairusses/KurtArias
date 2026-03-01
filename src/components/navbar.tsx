"use client";

import { Button, Separator, Link } from '@heroui/react';
import {Icon} from "@iconify/react";
export default function CustomNavbar() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between w-full h-20 pl-35 pr-20">
        {/* Name */}
        <section>
          <h1 className="text-xl font-bold text-foreground">
            Kurt Arias
          </h1>
        </section>
        {/* Pages */}
        <section className="flex flex-row items-center justify-between space-x-15">
          <Link href="/">
            About Me
          </Link>
          <Link href="/projects">
            Projects
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </section>
        {/* Socials */}
        <section>
          <Link href="https://github.com/Sairusses">
            <Button isIconOnly className="bg-gray-200 bg-opacity-20">
              <Icon icon="devicon:github" className="h-6 w-6"/>
            </Button>
          </Link>
        </section>
      </nav>
      <Separator className="opacity-50" />
    </>
  );
}