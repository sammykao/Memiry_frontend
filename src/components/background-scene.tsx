"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform vec2 uPointer;
        uniform float uTime;
        varying vec2 vUv;

        float circle(vec2 uv, vec2 center, float radius) {
          return smoothstep(radius, radius - 0.18, distance(uv, center));
        }

        void main() {
          vec2 uv = vUv;
          vec2 pointer = vec2(uPointer.x, 1.0 - uPointer.y);

          float waveA = sin((uv.x * 4.5 + uTime * 0.25) * 3.14159) * 0.5 + 0.5;
          float waveB = sin((uv.y * 3.8 - uTime * 0.18) * 3.14159) * 0.5 + 0.5;
          float halo = circle(uv, pointer, 0.48) * 0.95;
          float drift = circle(uv, vec2(0.22 + sin(uTime * 0.08) * 0.06, 0.18), 0.55) * 0.55;
          float textureMix = (waveA * 0.45 + waveB * 0.55) * 0.18;

          vec3 base = vec3(0.96, 0.94, 0.90);
          vec3 mint = vec3(0.67, 0.86, 0.73);
          vec3 frost = vec3(0.83, 0.90, 0.97);
          vec3 stone = vec3(0.86, 0.84, 0.80);

          vec3 color = base;
          color = mix(color, mint, halo * 0.42);
          color = mix(color, frost, drift * 0.24);
          color = mix(color, stone, textureMix);

          float vignette = smoothstep(1.2, 0.12, distance(uv, vec2(0.5)));
          float alpha = 0.82 * vignette;

          gl_FragColor = vec4(color, alpha);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    const pointer = new THREE.Vector2(0.5, 0.5);
    const target = new THREE.Vector2(0.5, 0.5);

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight, false);
    };

    const onPointerMove = (event: PointerEvent) => {
      target.set(event.clientX / window.innerWidth, event.clientY / window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let frame = 0;
    const clock = new THREE.Clock();

    const render = () => {
      frame = window.requestAnimationFrame(render);
      pointer.lerp(target, 0.06);
      uniforms.uPointer.value.copy(pointer);
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.54),transparent_40%)]" />
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-80"
        aria-hidden="true"
      />
    </div>
  );
}
