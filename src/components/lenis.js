import Lenis from "lenis";

let lenis

export default function useLenis() {
  if (!lenis) {
    lenis = new Lenis({ smooth: true , duration: 1.2})
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }
  return lenis
}
