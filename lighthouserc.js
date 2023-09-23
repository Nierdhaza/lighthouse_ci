module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
      },
    },
    // upload: {
    //   target: "temporary-public-storage",
    // },
  },
};
