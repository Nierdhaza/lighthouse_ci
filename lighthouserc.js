module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.5 }],
        "categories:accessibility": ["error", { minScore: 0.5 }],
      },
    },
    // upload: {
    //   target: "temporary-public-storage",
    // },
  },
};
