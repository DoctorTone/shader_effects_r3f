varying vec2 vUv;
varying vec3 LocalPos;
uniform float time;
uniform float amplitude;
uniform float frequency;

void main() {
    LocalPos = position;
    if (LocalPos.y > 0.0) {
        LocalPos.z += amplitude * sin(time * frequency);
        LocalPos.y += amplitude * cos(time * frequency);
    }
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(LocalPos, 1.0);
}