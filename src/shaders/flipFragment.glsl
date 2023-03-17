varying vec2 vUv;
uniform sampler2D map;
uniform vec2 cell;
vec2 texTransform;

void main()
{
    texTransform = (vUv / 6.0) + (cell / 6.0);
    vec3 diffuseColor = texture2D( map, texTransform).rgb;
    gl_FragColor = vec4(diffuseColor, 1.0);
}