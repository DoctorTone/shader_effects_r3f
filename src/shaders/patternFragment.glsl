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
    //float strength = step(0.75, mod(vUv.x * 15.0, 1.0));
    //strength -= step(0.75, mod(vUv.y * 7.0, 1.0));

    //gl_FragColor = vec4(strength, strength, 0.0, 1.0);

    // float strength = floor(vUv.y * 10.0) / 10.0;

    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor(vUv.y * 10.0) / 10.0);
    // float strength = random(gridUv);

    // float strength = distance(vUv, vec2(0.5)) * 2.0;

    float offset = getValues(0.2, 0.4, 0.5);
    vec2 wavyUV = vec2(
        vUv.x + sin(vUv.y * 100.0) * 0.1,
        vUv.y + sin(vUv.x * 100.0) * 0.1
    );
    float strength = 1.0 - step(0.05, abs(distance(wavyUV, vec2(0.5)) - offset));

    gl_FragColor = vec4(strength, strength, 0.0, 1.0);
}