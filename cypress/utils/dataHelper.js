export const getTestData = (type) => {
  const env = Cypress.env();

  const dataMap = {
    
    // ===== OTP =====
    validOTP: {
      msisdn: env.VALID_MSISDN,
      nik: env.VALID_NIK
    },
    OTPwithAlpha: {
      msisdn: env.ALPHA_MSISDN,
      nik: env.ALPHA_NIK
    },
    OTPinvalidMSISDN: {
      msisdn: env.INVALID_MSISDN,
      nik: env.VALID_NIK
    },
    OTPinvalidNIK: {
      msisdn: env.VALID_MSISDN,
      nik: env.INVALID_NIK
    },

    // ===== PUK =====
    validPUK: {
      msisdn: env.VALID_MSISDN,
      nik: env.VALID_NIK,
      puk: env.VALID_PUK
    },
    PUKwithAlpha: {
      msisdn: env.ALPHA_MSISDN,
      nik: env.ALPHA_NIK,
      puk: env.ALPHA_PUK
    },
    PUKinvalidMSISDN: {
      msisdn: env.INVALID_MSISDN,
      nik: env.VALID_NIK,
      puk: env.VALID_PUK
    },
    PUKinvalidPUK: {
      msisdn: env.VALID_MSISDN,
      nik: env.VALID_NIK,
      puk: env.INVALID_PUK
    },
    PUKinvalidNIK: {
      msisdn: env.VALID_MSISDN,
      nik: env.INVALID_NIK,
      puk: env.VALID_PUK
    }
  };

  return dataMap[type];
};

export const getValidationData = () => {
  const env = Cypress.env();

  return [
    // ===== MSISDN =====
    {
      field: "msisdn",
      type: "invalid",
      value: env.INVALID_MSISDN,
      error: "Nomor diawali dengan angka nol",
      trigger: "realtime"
    },
    {
      field: "msisdn",
      type: "differentProvider",
      value: env.DIFFERENT_MSISDN,
      error: "Nomor yang Anda masukkan bukan nomor Axis/XL",
      trigger: "realtime"
    },

    // ===== NIK =====
    {
      field: "nik",
      type: "invalid",
      value: env.INVALID_NIK,
      error: "Periksa kembali NIK yang Anda masukkan",
      trigger: "realtime"
    },
    {
      field: "nik",
      type: "lessThan16",
      value: env.NIK_NOT16,
      error: "Minimal 16 karakter",
      trigger: "realtime"
    },
    {
      field: "nik",
      type: "invalidFormat",
      value: env.NIK_TIDAKSESUAI,
      error: "Format NIK yang Anda masukkan tidak sesuai, cek kembali NIK Anda",
      trigger: "realtime"
    },

    // ===== PUK (realtime) =====
    {
      field: "puk",
      type: "lessThan8",
      value: env.PUK_NOT8,
      error: "Minimal 8 karakter",
      trigger: "realtime"
    },

    // ===== PUK (Submit) =====
    {
      field: "puk",
      type: "invalid",
      value: env.INVALID_PUK,
      error: "PUK tidak ditemukan",
      trigger: "submit"
    }
  ];
};