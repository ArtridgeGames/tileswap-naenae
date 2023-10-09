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
      id="layer1">
      <rect width="300" height="300" rx="70"
        :style="{fill:color}"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props:['color']
}
</script>