import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./header.scss";
type Props = {};

export default function Header({}: Props) {
  return (
    <header id="header">
      <div className="left">
        <img src="/gfx/logo.png" alt="" className="logo" />
        <div className="socials">
          <a
            href="https://www.youtube.com/@HOSHILIVEes"
            className="btn btn-contact"
          >
            <FaYoutube />
          </a>
          <a href="https://x.com/hoshilivecorp" className="btn btn-contact">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </header>
  );
}
