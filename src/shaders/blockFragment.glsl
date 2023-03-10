uniform float time;
uniform sampler2D map;
varying vec2 vUv;

void main() {
    vec4 _texture = texture2D(map, vUv);
    gl_FragColor.rgb = _texture.rgb;
    gl_FragColor.a = 1.0;
}