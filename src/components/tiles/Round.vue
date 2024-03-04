<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 300 300"
    version="1.1"
    id="svg5"
    inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"
    sodipodi:docname="round.svg"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg">
    <defs
      id="defs2" />
    <g
      inkscape:label="Calque 1"
      inkscape:groupmode="layer"
      id="layer1">
      <circle
        style="stroke-width:10"
       :style="{fill:color,stroke:borderColor,stroke_miterlimit:4,stroke_dasharray:'none',paint_order:'fill markers stroke'}"
        id="path846"
        cx="150"
        cy="150"
        r="145" />
    </g>
  </svg>
</template>

<script>
export default {
  props:['color', 'borderColor']
}
</script>