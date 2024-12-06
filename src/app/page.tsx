"use client";
import { useEffect, useState } from "react";
import "./home.scss";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
const cycles = [
  {
    src: "/gfx/AZU.png",
    name: "AZURINE",
    yt: "https://www.youtube.com/@AZURINE-Ch",
    x: "https://x.com/RineAzu",
  },
  {
    src: "/gfx/COTTON.png",
    name: "COTTON",
  },
  {
    src: "/gfx/LYSS.png",
    name: "LYSS",
    yt: "https://www.youtube.com/@Lyss-Ch",
    x: "https://x.com/Lyss_HL",
  },
  {
    src: "/gfx/MERCHI.png",
    name: "MERCHI",
    yt: "https://www.youtube.com/@MerchiVT",
    x: "https://www.youtube.com/@MerchiVT",
  },
  {
    src: "/gfx/QT.png",
    name: "QT",
    yt: "https://www.youtube.com/@HOSHILIVEes",
  },
  {
    src: "/gfx/RINE.png",
    name: "RINE",
    potrait: true,
  },
  {
    src: "/gfx/SOLARA.png",
    name: "SOLARA",
    yt: "https://www.youtube.com/@SolaraCH",
  },
];
export default function Home() {
  const [active, setActive] = useState(
    Math.floor(Math.random() * cycles.length)
  );
  useEffect(() => {
    const loadImages = (cycles: any) => {
      cycles.forEach((cycle: any) => {
        const img = new Image();
        img.src = cycle.src;
        img.onload = () => {
          console.log("Image Loaded:", cycle.src);
        };
      });
    };
    loadImages(cycles);
  }, []);

  const prev = () => {
    setActive((a) => {
      return a - 1 < 0 ? cycles.length - 1 : a - 1;
    });
  };
  const next = () => {
    setActive((a) => {
      return a + 1 >= cycles.length ? 0 : a + 1;
    });
  };

  return (
    <main id={"page_home"}>
      <section id="general-preview">
        <article>
          <div className="panel">
            <blockquote className="twitter-tweet">
              <p lang="es" dir="ltr">
                📢 ¡VIRTUAL BE se transforma en HOSHILIVE!
                <br />
                <br />
                🌟 ¡Lo que viene al mundo{" "}
                <a href="https://twitter.com/hashtag/VTuber?src=hash&amp;ref_src=twsrc%5Etfw">
                  #VTuber
                </a>{" "}
                te va a encantar, no te lo pierdas! 🌟{" "}
                <a href="https://t.co/gwLdBDoLoD">pic.twitter.com/gwLdBDoLoD</a>
              </p>
              &mdash; HOSHILIVE CORP. 🌟 (@hoshilivecorp){" "}
              <a href="https://twitter.com/hoshilivecorp/status/1837195949761826953?ref_src=twsrc%5Etfw">
                September 20, 2024
              </a>
            </blockquote>
          </div>
          <div className="panel">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/p0WlCY6L1Mo?si=g2Dv_b70Iu7MfFUt"
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </article>
        <figure>
          <svg
            width="987"
            height="940"
            viewBox="0 0 987 940"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-star two"
          >
            <path
              d="M481.494 9.55168C485.385 -2.42535 502.33 -2.42538 506.221 9.55166L613.72 340.397C615.46 345.753 620.451 349.38 626.083 349.38L973.955 349.38C986.548 349.38 991.784 365.495 981.596 372.897L700.162 577.371C695.606 580.681 693.699 586.549 695.44 591.905L802.938 922.751C806.829 934.728 793.121 944.687 782.933 937.285L501.499 732.812C496.942 729.501 490.773 729.501 486.216 732.812L204.782 937.285C194.594 944.687 180.886 934.728 184.777 922.751L292.276 591.905C294.016 586.549 292.109 580.681 287.553 577.371L6.11918 372.897C-4.0691 365.495 1.16696 349.38 13.7604 349.38L361.632 349.38C367.264 349.38 372.255 345.753 373.996 340.397L481.494 9.55168Z"
              fill="#DBE0E1"
            />
          </svg>
          <svg
            width="1041"
            height="990"
            viewBox="0 0 1041 990"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-star"
          >
            <path
              d="M520.858 102.436L613.68 388.114L620.752 409.88H643.638L944.018 409.88L701.006 586.439L682.49 599.891L689.563 621.657L782.385 907.334L539.373 730.776L520.858 717.324L502.342 730.776L259.33 907.334L352.153 621.657L359.225 599.891L340.71 586.439L97.6975 409.88L398.077 409.88H420.963L428.035 388.114L520.858 102.436Z"
              stroke="#DBE0E1"
              stroke-width="63"
            />
          </svg>
          <AnimatePresence mode="wait">
            {/* <img src="/" alt="" /> */}

            <motion.div
              className="chars-container"
              key={"selected-art" + active}
              initial={{
                x: -10,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: [1, 1.05, 1],
              }}
              exit={{
                opacity: 0,
                x: 10,
                scale: 0.9,
              }}
              transition={{
                ease: "backInOut",
                duration: 0.7,
              }}
            >
              <img
                src={cycles[active].src}
                alt=""
                className={`chara-art ${
                  cycles[active].potrait ? "potrait" : ""
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </figure>
      </section>
      <div className="controls">
        {cycles[active] && (
          <div className="details">
            <p>{cycles[active].name}</p>
            <div className="contacts">
              {cycles[active].yt && (
                <a
                  href={cycles[active].yt}
                  target="_blank"
                  className="btn btn-contact"
                >
                  <FaYoutube />
                </a>
              )}
              {cycles[active].x && (
                <a
                  href={cycles[active].x}
                  target="_blank"
                  className="btn btn-contact"
                >
                  <FaXTwitter />
                </a>
              )}
            </div>
          </div>
        )}
        <button className="btn btn-control" onClick={prev}>
          <FaArrowLeft />
        </button>
        <button className="btn btn-control" onClick={next}>
          <FaArrowRight />
        </button>
      </div>
      <div className="progress">
        {cycles.map((cycl: any, index: number) => {
          return (
            <div className={`prog ${index === active ? "active" : ""}`}></div>
          );
        })}
        {/* <div className="prog"></div>
        <div className="prog"></div>
        <div className="prog"></div>
        <div className="prog"></div> */}
      </div>
    </main>
  );
}
