varying vec2 vUv;
uniform float time;
const float PI = 3.141592;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float getValues(float min, float max, float frequency)
{
    float value = sin(PI * time * frequency);
    float delta = (max - min)/2.0;
    value *= delta;
    float offset = (max + min) / 2.0;
    return value += offset;
}

void main()
{
    float segments = getValues(2.0, 10.0, 0.25);
    float divisions = getValues(2.0, 10.0, 0.15);
    float strength = step(0.75, mod(vUv.x * divisions, 1.0));
    strength -= step(0.75, mod(vUv.y * segments, 1.0));

    //gl_FragColor = vec4(strength, strength, 0.0, 1.0);

    // float strength = floor(vUv.y * 10.0) / 10.0;

    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor(vUv.y * 10.0) / 10.0);
    // float strength = random(gridUv);

    // float strength = distance(vUv, vec2(0.5)) * 2.0;

    gl_FragColor = vec4(strength, strength, 0.0, 1.0);
}