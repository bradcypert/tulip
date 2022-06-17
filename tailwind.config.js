module.exports = {
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    options: {
      safelist: {
        standard: [/^bg-/, /^border-/, /^h-36/, /^w-36/],
      },
      blocklist: [/^debug-/],
      keyframes: false,
      fontFace: true,
    },
    theme: {},
    variants: {
      display: ["group-hover"],
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
  };
