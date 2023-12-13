const fs = require("fs");

const path = require("path");

const root = __dirname;
const directoryPath = path.join(root, "lighthouse-results");
const jsonsInDir = fs
  .readdirSync(path.join(root + "/lighthouse-results"))
  .filter((file) => path.extname(file) === ".json");

const manifest = jsonsInDir.find(
  (file) => path.basename(file) === "manifest.json"
);
const manifestPath = path.join(directoryPath, manifest);

const parsedManifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const summaries = parsedManifest.map(
  (manifestElement) => manifestElement.summary
);

console.log({ parsedManifest });

const sum = summaries.reduce(
  (prev, summary) => {
    return {
      performance: prev?.performance + summary.performance,
      accessibility: prev?.accessibility + summary.accessibility,
      "best-practices": prev?.["best-practices"] + summary["best-practices"],
      seo: prev?.seo + summary.seo,
      pwa: prev?.pwa + summary.pwa,
    };
  },
  { performance: 0, accessibility: 0, "best-practices": 0, seo: 0, pwa: 0 }
);

for (const key in sum) {
  sum[key] /= 3;
  sum[key] = +sum[key].toFixed(2);
}

// console.log(sum);
