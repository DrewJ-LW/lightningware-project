declare module 'vanta/dist/vanta.globe.min.js' {
	type VantaGlobeOptions = {
		el: HTMLElement | string;
		THREE: typeof import('three');
		mouseControls?: boolean;
		touchControls?: boolean;
		gyroControls?: boolean;
		minHeight?: number;
		minWidth?: number;
		scale?: number;
		scaleMobile?: number;
		color?: number;
		color2?: number;
		size?: number;
		backgroundColor?: number;
		[key: string]: unknown;
	};

	type VantaEffect = {
		destroy: () => void;
		setOptions?: (options: Partial<VantaGlobeOptions>) => void;
	};

	export type VantaGlobeFactory = (options: VantaGlobeOptions) => VantaEffect;
	export type { VantaEffect, VantaGlobeOptions };

	export const _vantaEffect: VantaGlobeFactory;
	const GLOBE: VantaGlobeFactory | { default: VantaGlobeFactory };
	export default GLOBE;
}
