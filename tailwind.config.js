module.exports = {
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    safelist: [
        {
          pattern: /bg-*-*/,
          variants: ['hover', 'focus', 'dark'],
        },
        {
          pattern: /border-*-*/,
          variants: ['hover', 'focus', 'dark'],
        },
        {
          pattern: /h-36/
        }
        {
          pattern: /w-36/
        }
    ],
    options: {
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
