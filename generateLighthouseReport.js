const fs = require("fs");

const path = require("path");
const lighthouseCommentMaker = require("./scripts/lighthouseReportComment");

const root = __dirname;
const lighthouseResultsFolder = path.join(root, "lighthouse-results");
const jsonsInDir = fs
  .readdirSync(path.join(root + "/lighthouse-results"))
  .filter((file) => path.extname(file) === ".json");

const manifestPath = path.join(lighthouseResultsFolder, "manifest.json");

const parsedManifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const summaries = parsedManifest.map(
  (manifestElement) => manifestElement.summary
);

const reportSum = summaries.reduce(
  (prev, summary) => ({
    performance: prev?.performance + summary.performance,
    accessibility: prev?.accessibility + summary.accessibility,
    "best-practices": prev?.["best-practices"] + summary["best-practices"],
    seo: prev?.seo + summary.seo,
    pwa: prev?.pwa + summary.pwa,
  }),
  { performance: 0, accessibility: 0, "best-practices": 0, seo: 0, pwa: 0 }
);

for (const key in reportSum) {
  reportSum[key] /= summaries.length;
  reportSum[key] = +reportSum[key].toFixed(2);
}

const metricsJson = jsonsInDir.filter(
  (file) => path.basename(file) !== "manifest.json"
);

const metrics = metricsJson
  .map((file) => {
    const jsonPath = path.join(lighthouseResultsFolder, file);
    return JSON.parse(fs.readFileSync(jsonPath, "utf8"))
      .audits.metrics.details.items.map((item) => ({
        firstContentfulPaint: item.firstContentfulPaint,
        largestContentfulPaint: item.largestContentfulPaint,
        speedIndex: item.speedIndex,
      }))
      .filter((item) =>
        Object.values(item).every((value) => value !== undefined)
      );
  })
  .flat();

const metricsSum = metrics.reduce(
  (acc, summary) => ({
    firstContentfulPaint:
      acc?.firstContentfulPaint + summary.firstContentfulPaint,
    largestContentfulPaint:
      acc?.largestContentfulPaint + summary.largestContentfulPaint,
    speedIndex: acc?.speedIndex + summary.speedIndex,
  }),
  { firstContentfulPaint: 0, largestContentfulPaint: 0, speedIndex: 0 }
);

for (const key in metricsSum) {
  metricsSum[key] /= metrics.length;
  metricsSum[key] = +metricsSum[key].toFixed(2);
}

fs.writeFileSync(
  path.join(lighthouseResultsFolder, "lighthouseReport.md"),
  lighthouseCommentMaker({
    lighthouseOutputs: { ...reportSum, ...metricsSum },
  }),
  "utf8"
);
