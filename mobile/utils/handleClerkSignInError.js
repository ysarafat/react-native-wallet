export const handleClerkSignInError = (err, setError) => {
  const code = err?.errors?.[0]?.code;

  switch (code) {
    case "form_identifier_not_found":
      setError("No account found with this email.");
      break;

    case "form_password_incorrect":
      setError("Incorrect password. Please try again.");
      break;

    case "form_identifier_invalid":
      setError("Please enter a valid email address.");
      break;

    case "too_many_attempts":
    case "rate_limit_exceeded":
      setError("Too many attempts. Please wait and try again later.");
      break;

    case "verification_failed":
      setError("Verification failed. Please try again.");
      break;

    case "verification_expired":
      setError("Verification code expired. Please request a new one.");
      break;

    case "session_exists":
      setError("You are already signed in.");
      break;

    default:
      setError(
        err?.errors?.[0]?.message || "Unable to sign in. Please try again.",
      );
  }
};
