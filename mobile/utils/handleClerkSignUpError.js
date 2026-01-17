export const handleClerkSignUpError = (err, setError) => {
  const code = err?.errors?.[0]?.code;

  switch (code) {
    case "form_identifier_exists":
      setError("This email is already registered. Please use another email.");
      break;

    case "form_password_pwned":
      setError(
        "This password was found in a data breach. Please choose a stronger password.",
      );
      break;

    case "form_password_length_too_short":
      setError("Password must be at least 8 characters long.");
      break;

    case "form_password_no_number":
      setError("Password must contain at least one number.");
      break;

    case "form_password_no_special_char":
      setError("Password must contain at least one special character.");
      break;

    case "form_password_no_uppercase":
      setError("Password must contain at least one uppercase letter.");
      break;

    case "form_password_no_lowercase":
      setError("Password must contain at least one lowercase letter.");
      break;

    case "form_identifier_invalid":
      setError("Please enter a valid email address.");
      break;

    case "form_password_invalid":
      setError("Password does not meet security requirements.");
      break;

    case "verification_failed":
      setError("Verification failed. Please try again.");
      break;

    case "verification_expired":
      setError("Verification code expired. Please request a new one.");
      break;

    case "rate_limit_exceeded":
      setError("Too many attempts. Please wait and try again.");
      break;

    default:
      setError(
        err?.errors?.[0]?.message || "Something went wrong. Please try again.",
      );
  }
};
