import React from "react"
import Link from "next/link"
import Container from "./container"

const Nav = ({ categories }) => {
  return (
    <nav className="absolute top-0 w-full z-50">
      <Container>
        <div className="container mx-auto py-3">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
              <div className="text-xl font-light text-white">
                <a
                  href="#"
                  className="text-white text-xl font-logo font-light capitalize hover:brightness-90 md:text-2xl"
                >
                  Artemtech
                </a>
              </div>

              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-white hover:brightness-90 focus:outline-none focus:brightness-110"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden -mx-4 md:flex md:items-center">
              <a
                href="/"
                className="block mx-4 mt-2 md:mt-0 text-lg text-white capitalize hover:brightness-90"
              >
                Home
              </a>
              <a
                href="/about"
                className="block mx-4 mt-2 md:mt-0 text-lg text-white capitalize hover:brightness-90"
              >
                Over ons
              </a>
              <a
                href="#"
                className="block mx-4 mt-2 md:mt-0 text-lg text-white capitalize hover:brightness-90"
              >
                Projecten
              </a>
              <a
                href="#"
                className="block mx-4 mt-2 md:mt-0 text-lg text-white capitalize hover:brightness-90"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
