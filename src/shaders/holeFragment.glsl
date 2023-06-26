varying vec2 vUv;
varying vec4 WorldPos;
uniform vec2 holeSize;
uniform sampler2D map;

void main()
{
    if (WorldPos.x < holeSize.x && WorldPos.x > -holeSize.x) {
        if (WorldPos.y < holeSize.y && WorldPos.y > -holeSize.y) {
            discard;
        }
    }
    
    vec4 _texture = texture2D(map, vUv);
    gl_FragColor.rgb = _texture.rgb;
    gl_FragColor.a = 1.0;
}