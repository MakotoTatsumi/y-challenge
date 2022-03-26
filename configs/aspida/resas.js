module.exports = {
  input: "./src/libs/apiClient/resas/", // "input" of aspida is "output" for openapi2aspida
  outputEachDir: true, // Generate $api.ts in each endpoint directory
  openapi: { inputFile: "./spec/resas.yaml" },
}
