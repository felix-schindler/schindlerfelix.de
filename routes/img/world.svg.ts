import type { Handlers } from "$fresh/server.ts";

import { feature } from "topojson-client";
import { geoSatellite } from "d3-geo-projection";
import { geoPath } from "d3-geo";

import { pb, tw } from "@/core/mod.ts";
import topology from "@/core/land-110m.json" with { type: "json" };
import { isAllowedLanguage } from "@/core/i18n/mod.ts";
import type { State } from "@/core/types.ts";

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

function render(
	name: string,
	coords: [number, number],
	multiply: number,
	isDark: boolean,
) {
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
				font_size * multiply * name.length + 40
			}" height="60" rx="10" class="highlight" />
        <polygon points="25,0 40,-10 40,10" class="highlight" />
        <text
          x="60"
          fill="white"
          text-anchor="start"
          alignment-baseline="middle"
          dominant-baseline="middle"
          style="font-family: 'Courier', 'Courier New'; font-size: ${font_size}px; text-transform: uppercase; font-weight: bold"
        >${name}</text>
      </g>`
			: ""
	}
    </svg>
  `;
}

export const handler: Handlers<never, State> = {
	async GET(_req, ctx) {
		const searchParams = ctx.url.searchParams;

		// Get values from params
		const loc = searchParams.get("loc");

		if (loc === null) {
			return new Response(undefined, { status: 400 });
		}

		const isDark = searchParams.has("dark");
		let lang = searchParams.get("lang");
		if (!isAllowedLanguage(lang)) lang = "en";

		const location = await pb.collection("locations").getOne(loc);

		let name = "";
		let multiply = 0.6;

		switch (lang) {
			case "en":
				name = location.name_en;
				break;
			case "de":
				name = location.name_de;
				break;
			case "zh":
				name = location.name_zh;
				multiply = 1;
				break;
		}

		// Generate SVG
		const svg = render(
			name,
			[location.lat, location.lon],
			multiply,
			isDark,
		).replace(
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
