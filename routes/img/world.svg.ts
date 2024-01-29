import { Handlers } from "$fresh/server.ts";

import { feature } from "https://esm.sh/topojson-client@3.1.0";
import { geoSatellite } from "https://esm.sh/d3-geo-projection@4.0.0";
import { geoPath } from "https://esm.sh/d3-geo@3.1.0";

import { tw } from "@/core/utils.ts";
import topology from "@/core/land-110m.json" with { type: "json" };

const land = feature(topology, topology.objects.land);

const font_size = 36;
const distance = 8;
const w = 1000;
const h = 1000;
const rad_to_deg = 180 / Math.PI;

const projection = geoSatellite()
	.distance(distance)
	.clipAngle(Math.acos(1 / distance) * rad_to_deg)
	.translate([w / 2, h / 2])
	.scale(450)
	.precision(0.5);

const path = geoPath(projection);

type Region = {
	name: string;
	coords: [number, number];
};

const regions: Record<string, Region> = {
	stuttgart: {
		name: "Stuttgart",
		coords: [9.1770, 48.7823],
	},
	xian: {
		name: "西安（Xi'an） ",
		coords: [108.9402, 34.3416],
	},
	shanghai: {
		name: "上海（Shanghai） ",
		coords: [121.4737, 31.2304],
	},
} as const;

function render(region?: Region, isDark?: boolean) {
	if (!region) {
		return `<?xml version="1.0" encoding="UTF-8"?>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80">
				<style>
					${
			isDark
				? `
						text {
							fill: white;
						}
					`
				: ""
		}

					.small {
						font: italic 13px sans-serif;
					}
					.heavy {
						font: bold 30px sans-serif;
					}

					/* Note that the color of the text is set with the    *
						* fill property, the color property is for HTML only */
					.Rrrrr {
						font: italic 40px serif;
						fill: red;
					}
				</style>

				<text x="20" y="35" class="small">This</text>
				<text x="40" y="35" class="heavy">did</text>
				<text x="55" y="55" class="small">not</text>
				<text x="65" y="55" class="Rrrrr">work!</text>
			</svg>
		`;
	}

	const city = region.name;
	const coords = region.coords;

	projection.rotate([-coords[0] - 30, -coords[1] * (30 / 90), 0]);

	const dot = projection(coords);

	return `<?xml version="1.0" encoding="UTF-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
      <style>
        path {
          stroke: none;
        }

        .ocean {
          fill: ${tw.blue[100]};
        }

        .land {
          fill: ${tw.green[500]};
        }

        .highlight {
          fill: ${tw.red[500]};
        }

        .dot {
          fill: ${tw.red[500]};
        }

				${
		isDark
			? `
				.ocean {
					fill: ${tw.blue[950]};
				}

				.land {
					fill: ${tw.emerald[700]};
				}

				.highlight {
					fill: ${tw.red[600]};
				}

				.dot {
					fill: ${tw.red[600]};
				}
				`
			: ""
	}
		}
      </style>

      <path d="${path({ type: "Sphere" })}" class="ocean"/>
      <path d="${path(land)}" class="land"/>

      ${
		dot
			? `
      <g transform="translate(${dot[0]},${dot[1]})">
        <circle r="15" class="dot"/>
        <rect x="40" y="-32.5" width="${
				font_size * 0.6 * city.length + 40
			}" height="60" rx="10" class="highlight" />
        <polygon points="25,0 40,-10 40,10" class="highlight" />
        <text
          x="60"
          fill="white"
          text-anchor="start"
          alignment-baseline="middle"
          dominant-baseline="middle"
          style="font-family: 'Courier', 'Courier New'; font-size: ${font_size}px; text-transform: uppercase; font-weight: bold"
        >${city}</text>
      </g>`
			: ""
	}
    </svg>
  `;
}

export const handler: Handlers = {
	GET(req) {
		const { searchParams } = new URL(req.url);

		// Get values from params
		const isDark = searchParams.has("dark");
		const region = regions.xian;

		// Generate SVG
		const svg = render(region, isDark).replace(
			/\d\.\d+/g,
			(match) => match.slice(0, 4),
		);

		// Return SVG
		return new Response(svg, {
			headers: {
				"content-type": "image/svg+xml",
				"cache-control": "private, max-age=3600",
			},
		});
	},
};