const formatScore = (score) => Math.round(score * 100);
const emojiScore = (score) =>
  score >= 0.9 ? "🟢" : score >= 0.5 ? "🟠" : "🔴";

const scoreRow = (label, score) =>
  `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;

function makeComment(lighthouseOutputs) {
  const comment = `## ⚡️🏠 Lighthouse report summary

| Category | Score |
| -------- | ----- |
${scoreRow("Performance", lighthouseOutputs.performance)}
${scoreRow("Accessibility", lighthouseOutputs.accessibility)}
${scoreRow("Best practices", lighthouseOutputs["best-practices"])}
${scoreRow("SEO", lighthouseOutputs.seo)}
${scoreRow("PWA", lighthouseOutputs.pwa)}

#### Other metrics
| Metric | Time |
| -------- | ----- |
| First Contentful Paint | ${lighthouseOutputs.firstContentfulPaint}ms |
| Largest Contentful Paint | ${lighthouseOutputs.largestContentfulPaint}ms |
| Speed Index | ${lighthouseOutputs.speedIndex}ms |
`;

  return comment;
}

module.exports = ({ lighthouseOutputs }) => {
  return makeComment(lighthouseOutputs);
};
