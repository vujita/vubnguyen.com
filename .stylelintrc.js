module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
  },
};
