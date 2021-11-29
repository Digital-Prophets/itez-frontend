export const ITEZ_API_URI =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

/* const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  ITEZ_API_URI: getEnvironmentVariable("ITEZ_API_URI"),
}; */
