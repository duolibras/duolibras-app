 
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"

export default {
 content: [
   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
 	extend: {
 		colors: {
 			cyan: {
 				'500': '#06B6D4',
 				'700': '#0E7490'
 			},
 			background: {
 				light: '#F5F5F5',
 				dark: '#121212'
 			},
 			text: {
 				light: '#1A1A1A',
 				dark: '#FFFFFF'
 			},
 			secondary: {
 				light: '#71717A',
 				dark: '#A1A1AA'
 			},
 			muted: {
 				light: '#F4F4F5',
 				dark: '#1E293B'
 			},
 			border: {
 				light: '#E4E4E7',
 				dark: '#334155'
 			}
 		},
 		utilities: {
 			'.sr-only': {
 				position: 'absolute',
 				width: '1px',
 				height: '1px',
 				padding: '0',
 				margin: '-1px',
 				overflow: 'hidden',
 				clip: 'rect(0, 0, 0, 0)',
 				whiteSpace: 'nowrap',
 				borderWidth: '0'
 			}
 		},
 		fontFamily: {
 			sans: [
 				'system-ui',
 				'-apple-system',
 				'BlinkMacSystemFont',
 				'Segoe UI',
 				'Roboto',
 				'Oxygen',
 				'Ubuntu',
 				'Cantarell',
 				'Fira Sans',
 				'Droid Sans',
 				'Helvetica Neue',
 				'sans-serif'
 			]
 		},
 		borderRadius: {
 			lg: 'var(--radius)',
 			md: 'calc(var(--radius) - 2px)',
 			sm: 'calc(var(--radius) - 4px)'
 		},
 		keyframes: {
 			'accordion-down': {
 				from: {
 					height: '0'
 				},
 				to: {
 					height: 'var(--radix-accordion-content-height)'
 				}
 			},
 			'accordion-up': {
 				from: {
 					height: 'var(--radix-accordion-content-height)'
 				},
 				to: {
 					height: '0'
 				}
 			},
			 float: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-4px)' }
			}
 		},
 		animation: {
 			'accordion-down': 'accordion-down 0.2s ease-out',
 			'accordion-up': 'accordion-up 0.2s ease-out',
			'float': 'float 3s ease-in-out infinite'
 		},
	},
 },
 plugins: [animate],
 darkMode: ['class']
} satisfies Config;
