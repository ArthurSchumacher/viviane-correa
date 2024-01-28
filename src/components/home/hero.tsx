'use client';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Image } from "@nextui-org/react"
import { useState } from "react";
import Arrow from "./arrow";

export default function Hero() {
  // const [currentSlide, setCurrentSlide] = useState(0)
  // const [loaded, setLoaded] = useState(false)
  // const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
  //   {
  //     initial: 0,
  //     slideChanged(slider) {
  //       setCurrentSlide(slider.track.details.rel)
  //     },
  //     created() {
  //       setLoaded(true)
  //     },
  //   }
  // )

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 w-full min-h-screen">
        <Image src="/viviane-hero-1.png" alt="Hero Image 1" radius="none" className="object-cover object-center" />
      </div>
      <div className="keen-slider__slide number-slide2 w-full min-h-screen">
        <Image src="/apto-44-6.png" alt="Hero Image 2" radius="none" className="object-cover object-center" />
      </div>
      <div className="keen-slider__slide number-slide2 w-full min-h-screen">
        <Image src="/apto-44-11.png" alt="Hero Image 3" radius="none" className="object-cover object-center" />
      </div>
      <div className="keen-slider__slide number-slide2 w-full min-h-screen">
        <Image src="/apto-44-16.png" alt="Hero Image 4" radius="none" className="object-cover object-center" />
      </div>
      <div className="keen-slider__slide number-slide2 w-full min-h-screen">
        <Image src="/apto-44-10.png" alt="Hero Image 5" radius="none" className="object-cover object-center" />
      </div>
      {/* {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )} */}
    </div>
  )
}