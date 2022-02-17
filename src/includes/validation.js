import {
  Form, Field, defineRule, ErrorMessage, configure,
} from 'vee-validate';
import {
  required,
  min,
  max,
  email,
  alpha_spaces as alphaSpaces,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('Form', Form);
    app.component('Field', Field);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('minValue', minValue);
    defineRule('maxValue', maxValue);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This field ${ctx.field} is required.`,
          min: `This field ${ctx.field} is to short.`,
          max: `This field ${ctx.field} is to long.`,
          alphaSpaces: `This field ${ctx.field} may only contain alphabetical characters and spaces.`,
          email: `This field ${ctx.field} must be a valid email.`,
          min_value: `This field ${ctx.field} is too low.`,
          max_value: `This field ${ctx.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}`,
          country_excluded: `Due dsadsa ${ctx.field}`,
          tos: `You must accept the Terms of Service ${ctx.field}`,
        };

        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} not valid`;

        return message;
      },
      validateOnInput: false,
    });
  },
};
