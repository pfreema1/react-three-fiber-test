import { ShaderMaterial } from 'three';
import StretchVert from '../shaders/stretch.vert';
import StretchFrag from '../shaders/stretch.frag';

export default class StretchMaterial extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: StretchVert,
      fragmentShader: StretchFrag
    });

    this.uniforms = {
      uTime: { value: 0.0 }
    };
  }
}
