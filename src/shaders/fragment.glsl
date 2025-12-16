// 부동소수점 정밀도
precision mediump float;

varying vec2 vUv;

void main() {
  gl_FragColor = vec4(vUv, 0.0, 1.0);
}