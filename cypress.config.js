const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      // inject env ke Cypress
      config.env = {
        BASIC_AUTH_USER : process.env.BASIC_AUTH_USER,
        BASIC_AUTH_PASS : process.env.BASIC_AUTH_PASS,
        
        VALID_MSISDN: process.env.VALID_MSISDN,
        INVALID_MSISDN: process.env.INVALID_MSISDN,
        DIFFERENT_MSISDN: process.env.DIFFERENT_MSISDN,

        ALPHA_MSISDN: process.env.ALPHA_MSISDN,
        ALPHA_NIK: process.env.ALPHA_NIK,
        ALPHA_PUK: process.env.ALPHA_PUK,
        
        VALID_NIK: process.env.VALID_NIK,
        INVALID_NIK: process.env.INVALID_NIK,
        NIK_NOT16: process.env.NIK_NOT16,
        NIK_TIDAKSESUAI: process.env.NIK_TIDAKSESUAI,
        
        VALID_PUK: process.env.VALID_PUK,
        INVALID_PUK: process.env.INVALID_PUK,
        PUK_NOT8: process.env.PUK_NOT8
      };

      return config;
    },

    baseUrl: process.env.BASE_URL
  }
});