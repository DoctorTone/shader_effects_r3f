varying vec2 vUv;
varying vec4 WorldPos;

void main() {
    vUv = uv;
    WorldPos = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}