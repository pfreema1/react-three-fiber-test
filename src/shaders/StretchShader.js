import StretchVert from '../shaders/stretch.vert';
import StretchFrag from '../shaders/stretch.frag';
var glsl = require('glslify');

const StretchShader = {
  uniforms: {
    uTime: { value: 0.0 }
  },
  vertexShader: glsl(StretchVert),
  fragmentShader: glsl(StretchFrag)
};

export { StretchShader };
