<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import VantaBase from 'vanta/src/_base.js';
	import { getBrightness, rn } from 'vanta/src/helpers.js';

	const win = typeof window === 'object';
	let THREE = win && window.THREE;

	class Effect extends VantaBase {
		static initClass() {
			this.prototype.defaultOptions = {
				color: 0xff3f81,
				color2: 0xffffff,
				size: 1,
				backgroundColor: 0x23153c,
				points: 10,
				maxDistance: 20,
				spacing: 15,
				showDots: true
			};
		}

		constructor(userOptions) {
			THREE = userOptions.THREE || THREE;
			super(userOptions);
		}

		genPoint(x, y, z) {
			let sphere;

			if (!this.points) {
				this.points = [];
			}

			if (this.options.showDots) {
				const geometry = new THREE.SphereGeometry(0.25, 12, 12);
				const material = new THREE.MeshLambertMaterial({
					color: this.options.color
				});

				sphere = new THREE.Mesh(geometry, material);
			} else {
				sphere = new THREE.Object3D();
			}

			this.cont.add(sphere);
			sphere.ox = x;
			sphere.oy = y;
			sphere.oz = z;
			sphere.position.set(x, y, z);
			sphere.r = 0;

			return this.points.push(sphere);
		}

		onInit() {
			this.cont = new THREE.Group();
			this.cont.position.set(-50, -20, 0);
			this.scene.add(this.cont);

			const n = this.options.points;
			const { spacing } = this.options;
			const numPoints = n * n * 2;

			this.linePositions = new Float32Array(numPoints * numPoints * 3);
			this.lineColors = new Float32Array(numPoints * numPoints * 3);

			const colorBrightness = getBrightness(new THREE.Color(this.options.color));
			const backgroundBrightness = getBrightness(new THREE.Color(this.options.backgroundColor));

			this.blending = colorBrightness > backgroundBrightness ? 'additive' : 'subtractive';

			const geometry = new THREE.BufferGeometry();
			geometry.setAttribute(
				'position',
				new THREE.BufferAttribute(this.linePositions, 3).setUsage(THREE.DynamicDrawUsage)
			);
			geometry.setAttribute(
				'color',
				new THREE.BufferAttribute(this.lineColors, 3).setUsage(THREE.DynamicDrawUsage)
			);
			geometry.computeBoundingSphere();
			geometry.setDrawRange(0, 0);

			const material = new THREE.LineBasicMaterial({
				vertexColors: THREE.VertexColors,
				blending: this.blending === 'additive' ? THREE.AdditiveBlending : null,
				transparent: true
			});

			this.linesMesh = new THREE.LineSegments(geometry, material);
			this.cont.add(this.linesMesh);

			for (let i = 0; i <= n; i++) {
				for (let j = 0; j <= n; j++) {
					const y = 0;
					const x = (i - n / 2) * spacing;
					const z = (j - n / 2) * spacing;

					this.genPoint(x, y, z);
				}
			}

			this.camera = new THREE.PerspectiveCamera(20, this.width / this.height, 0.01, 10000);
// CONTROLS CAMERA POSITION
			this.camera.position.set(0, 100, 150);
			this.scene.add(this.camera);

			const ambience = new THREE.AmbientLight(0xffffff, 0.75);
			this.scene.add(ambience);

			this.spot = new THREE.SpotLight(0xffffff, 1);
			this.spot.position.set(0, 200, 0);
			this.spot.distance = 400;
			this.spot.target = this.cont;
			this.scene.add(this.spot);

			this.cont2 = new THREE.Group();
// CONTROLS POSITION OF GLOBE
			this.cont2.position.set(0,-20,-30);
			this.scene.add(this.cont2);

			this.createOrbitLines();
			this.createPoleLines();
			this.createWireframeGlobe();

// CONTROLS ROTATION OF GLOBE
			this.cont2.rotation.z = -0.15;
		}

		createOrbitLines() {
			const material = new THREE.LineBasicMaterial({ color: this.options.color2 });
			const linePoints = [];

			for (let i = 0; i < 80; i++) {
				const innerRadius = rn(18, 24);
				const outerRadius = innerRadius + rn(1, 6);
				const z = rn(-1, 1);
				const radius = Math.sqrt(1 - z * z);
				const theta = rn(0, Math.PI * 2);
				const y = Math.sin(theta) * radius;
				const x = Math.cos(theta) * radius;

				linePoints.push(new THREE.Vector3(x * innerRadius, y * innerRadius, z * innerRadius));
				linePoints.push(new THREE.Vector3(x * outerRadius, y * outerRadius, z * outerRadius));
			}

			const geometry = new THREE.BufferGeometry().setFromPoints(linePoints);

			this.linesMesh2 = new THREE.LineSegments(geometry, material);
			this.linesMesh2.position.set(0, 0, 0);
			this.cont2.add(this.linesMesh2);
		}

		createPoleLines() {
			const material = new THREE.LineBasicMaterial({
				color: this.options.color2,
				linewidth: 2
			});
			const linePoints = [new THREE.Vector3(0, 30, 0), new THREE.Vector3(0, -30, 0)];
			const heights = [
				17.9, 12, 8, 5, 3, 2, 1.5, 1.1, 0.8, 0.6, 0.45, 0.3, 0.2, 0.1, 0.05, 0.03, 0.02, 0.01
			];
			const count = 4;

			for (let i = 0; i < count; i++) {
				const x = 0.15 * Math.cos((i / count) * Math.PI * 2);
				const z = 0.15 * Math.sin((i / count) * Math.PI * 2);

				for (let j = 0; j < heights.length; j++) {
					const height = heights[j];
					const radius = 6 * (j + 1);

					linePoints.push(new THREE.Vector3(x * radius, height, z * radius));
					linePoints.push(new THREE.Vector3(x * radius, -height, z * radius));
				}
			}

			const geometry = new THREE.BufferGeometry().setFromPoints(linePoints);

			this.linesMesh3 = new THREE.LineSegments(geometry, material);
			this.linesMesh3.position.set(0, 0, 0);
			this.cont2.add(this.linesMesh3);
		}

		createWireframeGlobe() {
			const material = new THREE.LineBasicMaterial({ color: this.options.color });
			const sphereGeometry = new THREE.SphereGeometry(18 * this.options.size, 18, 14);
			const edges = new THREE.EdgesGeometry(sphereGeometry);

			this.sphere = new THREE.LineSegments(edges, material);
			this.sphere.position.set(0, 0, 0);
			this.cont2.add(this.sphere);
		}

		onUpdate() {
			let diff;

			if (this.helper != null) {
				this.helper.update();
			}

			if (this.controls != null) {
				this.controls.update();
			}

			const camera = this.camera;

			if (Math.abs(camera.tx - camera.position.x) > 0.01) {
				diff = camera.tx - camera.position.x;
				camera.position.x += diff * 0.02;
			}

			if (Math.abs(camera.ty - camera.position.y) > 0.01) {
				diff = camera.ty - camera.position.y;
				camera.position.y += diff * 0.02;
			}
// CONTROLS WHERE CAMERA LOOKS FOR DESKTOP AND MOBILE
			if (win && window.innerWidth < 480) {
				camera.lookAt(new THREE.Vector3(0, 0, 0));
			} else if (win && window.innerWidth < 720) {
				camera.lookAt(new THREE.Vector3(0, 0, 0));
			} else {
				camera.lookAt(new THREE.Vector3(0, 0, 0));
			}

			let vertexPosition = 0;
			let colorPosition = 0;
			let connectedCount = 0;

			const backgroundColor = new THREE.Color(this.options.backgroundColor);
			const color = new THREE.Color(this.options.color);
			const color2 = new THREE.Color(this.options.color2);
			const diffColor = color.clone().sub(backgroundColor);

			if (this.rayCaster) {
				this.rayCaster.setFromCamera(new THREE.Vector2(this.rcMouseX, this.rcMouseY), this.camera);
			}

			if (this.linesMesh2) {
				this.linesMesh2.rotation.z += 0.002;
				this.linesMesh2.rotation.x += 0.0008;
				this.linesMesh2.rotation.y += 0.0005;
			}

			if (this.sphere) {
				this.sphere.rotation.y += 0.002;
				this.linesMesh3.rotation.y -= 0.004;
			}

			for (let i = 0; i < this.points.length; i++) {
				let distance;
				let distanceToMouse;
				const point = this.points[i];

				if (this.rayCaster) {
					distanceToMouse = this.rayCaster.ray.distanceToPoint(point.position);
				} else {
					distanceToMouse = 1000;
				}

				const clampedDistance = distanceToMouse.clamp(5, 15);
				point.scale.z = ((15 - clampedDistance) * 0.25).clamp(1, 100);
				point.scale.x = point.scale.y = point.scale.z;
				point.position.y =
					2 * Math.sin(point.position.x / 10 + this.t * 0.01 + (point.position.z / 10) * 0.5);

				for (let j = i; j < this.points.length; j++) {
					const otherPoint = this.points[j];
					const dx = point.position.x - otherPoint.position.x;
					const dy = point.position.y - otherPoint.position.y;
					const dz = point.position.z - otherPoint.position.z;

					distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

					if (distance < this.options.maxDistance) {
						let lineColor;
						let alpha = (1 - distance / this.options.maxDistance) * 2;
						alpha = alpha.clamp(0, 1);

						if (this.blending === 'additive') {
							lineColor = new THREE.Color(0x000000).lerp(diffColor, alpha);
						} else {
							lineColor = backgroundColor.clone().lerp(color, alpha);
						}

						this.linePositions[vertexPosition++] = point.position.x;
						this.linePositions[vertexPosition++] = point.position.y;
						this.linePositions[vertexPosition++] = point.position.z;
						this.linePositions[vertexPosition++] = otherPoint.position.x;
						this.linePositions[vertexPosition++] = otherPoint.position.y;
						this.linePositions[vertexPosition++] = otherPoint.position.z;

						this.lineColors[colorPosition++] = lineColor.r;
						this.lineColors[colorPosition++] = lineColor.g;
						this.lineColors[colorPosition++] = lineColor.b;
						this.lineColors[colorPosition++] = lineColor.r;
						this.lineColors[colorPosition++] = lineColor.g;
						this.lineColors[colorPosition++] = lineColor.b;

						connectedCount++;
					}
				}
			}

			this.linesMesh.geometry.setDrawRange(0, connectedCount * 2);
			this.linesMesh.geometry.attributes.position.needsUpdate = true;
			this.linesMesh.geometry.attributes.color.needsUpdate = true;
			this.sphere.material.color.set(color);
			this.linesMesh2.material.color.set(color2);
			this.linesMesh3.material.color.set(color2);

			return this.t * 0.001;
		}

		onMouseMove(x, y) {
			const camera = this.camera;

			if (!camera.oy) {
				camera.oy = camera.position.y;
				camera.ox = camera.position.x;
				camera.oz = camera.position.z;
			}

			const angle = Math.atan2(camera.oz, camera.ox);
			const distance = Math.sqrt(camera.oz * camera.oz + camera.ox * camera.ox);
			const targetAngle = angle + (x - 0.5) * 1.5 * (this.options.mouseCoeffX || 1);

			camera.tz = distance * Math.sin(targetAngle);
			camera.tx = distance * Math.cos(targetAngle);
			camera.ty = camera.oy + (y - 0.5) * 80 * (this.options.mouseCoeffY || 1);

			this.rcMouseX = x * 2 - 1;
			this.rcMouseY = -x * 2 + 1;
		}

		onRestart() {
			this.scene.remove(this.linesMesh);
			this.points = [];
		}
	}

	Effect.initClass();

	let Globe;
	let vantaEffect;
	const accentColor = 0xffc100;
	const backgroundDkColor = 0x000a28;

	onMount(() => {
		let cancelled = false;

		async function createGlobe() {
			const threeModule = await import('three');

			if (cancelled || !Globe) return;

			vantaEffect = new Effect({
				el: Globe,
				THREE: threeModule,
				mouseControls: false,
				touchControls: false,
				gyroControls: false,
				minHeight: 200,
				minWidth: 200,
				scale: 1,
				scaleMobile: 1,
				color: accentColor,
				color2: accentColor,
				backgroundColor: backgroundDkColor,
				size: 2,
				points: 1,
				showDots: false
			});
		}

		createGlobe().catch((error) => {
			console.error('Unable to load test globe:', error);
		});

		return () => {
			cancelled = true;
			vantaEffect?.destroy();
		};
	});
</script>

<div class="globe" role="img" aria-label="Animated digital globe" bind:this={Globe}>
</div>

<style>
	.globe {
		position: relative;
		width: min(100%, 42rem);
		height: clamp(16rem, 42vw, 32rem);
		min-height: 12.5rem;
		overflow: hidden;
		background: var(--color-background-dk);
	}
</style>
