module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
      url: ["http://localhost:8080"],
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 1 }],
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
