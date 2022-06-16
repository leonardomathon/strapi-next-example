import React from "react"
import Link from "next/link"
import Nav from "./nav"
import Container from "./container"
import { getStrapiMedia } from "../lib/media"

const Header = ({ title, subtitle, text, headerImage }) => {
  const imageUrl = getStrapiMedia(headerImage)
  return (
    <header className="relative">
      <div className="w-full relative bg-bgblue-500 h-102 md:h-128">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className={`h-full w-full absolute top-0 bg-origin-content px-64 bg-cover bg-no-repeat bg-center shadow-[inset_0_0_0_50vw_rgba(54,79,107,0.43)]`}
        ></div>
        <Container>
          <div className="flex items-center h-full w-full text-white relative">
            <div className="">
              <h1 className="text-white font-bold leading-10 mb-2 md:mb-5">
                {title}
              </h1>
              <h2 className="text-3xl md:text-5xl text-white font-light  mb-2 md:mb-5">
                {subtitle}
              </h2>
              <p>{text}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full bg-cover bg-center bg-pinkred-500 px-48 rounded-br-large  h-20 md:h-36">
        <div className="flex items-center h-full w-full text-white "></div>
      </div>
    </header>
  )
}

export default Header
