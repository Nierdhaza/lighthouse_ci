module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
      // settings: {
      //   hostname: "127.0.0.1",
      // },
      numberOfRuns: 5,
      settings: {
        // auditMode: "full", // This enables all audits
        audits: ["first-contentful-paint", "interactive", "first-cpu-idle"],
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.6 }],
        "categories:accessibility": ["error", { minScore: 0.6 }],
        "first-contentful-paint": ["error", { minScore: 0.6 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "lighthouse-results",
    },
  },
};
