export const button_style_default = 'font-bold py-4 rounded-md';

export const button_primary_style = 'bg-gradient-to-r from-cyan-500 to-cyan-700 text-white hover:from-cyan-600 hover:to-cyan-700 transition-all duration-500 ease-in'
export const button_secondary_style = 'bg-gradient-to-r text-cyan-500 outline'

export const button_primary_animation = 'animate-[slideUp_0.5s_ease-in_0.6s] opacity-0 [animation-fill-mode:forwards]';
export const button_secondary_animation = 'animate-[slideUp_0.5s_ease-in_0.8s] opacity-0 [animation-fill-mode:forwards]'

export const all_button_primary_style = [button_style_default, button_primary_style, button_primary_animation ].join(' ');
export const all_button_secondary_style = [button_style_default, button_secondary_style, button_secondary_animation].join(' ');
