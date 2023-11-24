export const EVENTS = {
  TOUCHSTART: "ontouchstart" in window ? "touchstart" : "click",
  TOUCHEND: "ontouchend" in window ? "touchend" : "click",
}