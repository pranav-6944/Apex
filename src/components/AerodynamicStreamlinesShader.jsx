import React, { useEffect, useRef } from 'react';

const VERTEX_SHADER_SRC = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SRC = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                     -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouseNorm = u_mouse / u_resolution;
    
    // Wind velocity vector flows horizontally across car silhouette
    float speed = u_time * 1.8;
    
    // Interactive mouse draft disturbance
    vec2 mouseDelta = uv - mouseNorm;
    float mouseDist = length(mouseDelta);
    float mouseInfluence = smoothstep(0.45, 0.0, mouseDist);
    
    // Streamline layered frequency
    float flowX = uv.x * 3.5 - speed;
    float flowY = uv.y * 12.0;
    
    // Aerodynamic streamline distortion
    float turbulence = snoise(vec2(flowX * 0.4, flowY * 0.15)) * 0.45;
    turbulence += snoise(vec2(flowX * 1.2, flowY * 0.35 + u_time * 0.8)) * 0.2;
    turbulence += mouseInfluence * sin((uv.x - u_time * 3.0) * 20.0) * 0.15;
    
    float totalLines = 0.0;
    float amberLines = 0.0;
    
    // Multi-ribbon streamline traces representing wind-tunnel laminar & boundary airflow
    for (int i = 0; i < 9; i++) {
        float fi = float(i);
        float lineY = 0.12 + fi * 0.095 + sin(flowX * 0.6 + fi * 1.4) * 0.05 + turbulence * 0.15;
        // Aero wake compression in the center behind the cockpit / rear spoiler
        lineY += (0.5 - uv.y) * 0.1 * smoothstep(0.2, 0.9, uv.x);
        
        float dist = abs(uv.y - lineY);
        float intensity = 0.0035 / (dist + 0.0035);
        
        // Ribbon pulse and tapering
        float pulse = sin(uv.x * 6.0 - speed * 2.5 + fi * 1.7) * 0.5 + 0.5;
        float fade = smoothstep(0.0, 0.25, uv.x) * smoothstep(1.0, 0.7, uv.x);
        
        if (i == 3 || i == 4 || i == 7) {
            amberLines += intensity * pulse * fade * 1.35;
        } else {
            totalLines += intensity * pulse * fade * 0.85;
        }
    }
    
    // Color palettes: APEX Surgical Electric Amber (#f59e0b) and Cold Titanium Muted Steel
    vec3 amberColor = vec3(0.96, 0.62, 0.04);
    vec3 titaniumColor = vec3(0.55, 0.72, 0.88);
    vec3 hotGlow = vec3(1.0, 0.92, 0.75);
    
    vec3 finalColor = vec3(0.0);
    finalColor += totalLines * titaniumColor * 0.75;
    finalColor += amberLines * amberColor * 1.2;
    finalColor += pow(amberLines * 0.45, 2.0) * hotGlow;
    
    // Soft atmospheric aerodynamic fog
    float haze = snoise(vec2(uv.x * 1.5 - speed * 0.5, uv.y * 2.0)) * 0.04;
    finalColor += max(haze, 0.0) * amberColor * 0.3;
    
    // Background transparency blending
    float alpha = clamp((totalLines * 0.55 + amberLines * 0.9 + max(haze, 0.0)), 0.0, 0.88);
    
    gl_FragColor = vec4(finalColor, alpha);
}
`;

export function AerodynamicStreamlinesShader({ className = "absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-90 z-10" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    function compileShader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (t) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className={className} style={{ display: 'block' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
