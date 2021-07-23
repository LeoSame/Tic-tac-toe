export const crossSvg = (width = 20, height = 20, color = '#c4c4c4', strokeWidth = 15) => (
  <svg width={width} height={height} viewBox='0 0 315 315' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m169.064,157.75l138.593,-138.593c3.124,-3.124 3.124,-8.189 0,-11.313c-3.125,-3.124 -8.189,-3.124 -11.314,0l-138.593,138.592l-138.593,-138.593c-3.124,-3.124 -8.189,-3.124 -11.313,0c-3.125,3.124 -3.125,8.189 0,11.313l138.592,138.594l-138.593,138.593c-3.125,3.125 -3.125,8.189 0,11.314c1.562,1.562 3.609,2.343 5.657,2.343s4.095,-0.781 5.657,-2.343l138.593,-138.593l138.593,138.593c1.563,1.562 3.609,2.343 5.657,2.343s4.095,-0.781 5.657,-2.343c3.124,-3.125 3.124,-8.189 0,-11.314l-138.593,-138.593z'
      strokeWidth={strokeWidth}
      stroke={color}
      fill={color}
    />
  </svg>
);

export const zeroSvg = (width = 20, height = 20, color = '#c4c4c4', strokeWidth = 25) => (
  <svg width={width} height={height} color={color} viewBox='0 0 315 315' xmlns='http://www.w3.org/2000/svg'>
    <ellipse
      stroke={color}
      ry='145.499996'
      rx='145.499996'
      cy='159'
      cx='156.499997'
      strokeWidth={strokeWidth}
      fill='none'
    />
  </svg>
);
