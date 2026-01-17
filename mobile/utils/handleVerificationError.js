export const handleVerificationError = (err, setError) => {
  const code = err?.errors?.[0]?.code;

  switch (code) {
    case "verification_code_invalid":
      setError("Invalid verification code. Please try again.");
      break;

    case "verification_code_expired":
      setError("Verification code expired. Please request a new one.");
      break;

    case "verification_failed":
      setError("Verification failed. Please try again.");
      break;

    case "too_many_attempts":
    case "rate_limit_exceeded":
      setError("Too many attempts. Please wait and try again later.");
      break;

    case "session_exists":
      setError("You are already verified and signed in.");
      break;

    default:
      setError(
        err?.errors?.[0]?.message || "Verification failed. Please try again.",
      );
  }
};
