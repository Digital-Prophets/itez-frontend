const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  ITEZ_API_URI: getEnvironmentVariable("NEXT_PUBLIC_API_URL"),
  NEXT_URL: NEXT_URL,
};
