module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.5 }],
        "categories:accessibility": ["error", { minScore: 0.5 }],
        "first-contentful-paint": ["error", { minScore: 0.6 }],
      },
    },
    // upload: {
    //   target: "temporary-public-storage",
    // },
  },
};
