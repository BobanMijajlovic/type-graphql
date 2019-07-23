/**
 * Internal TypeGraphQL function for syncing monorepo packages versions.
 * Do not use it on your own purpose as it's not a part of a supported public API.
 */
export default function ensureInstalledOnlySinglePackageVersion(
  packageJSONPath: string,
): void {
  const ownVersion: string = require(packageJSONPath).version;
  const packageName: string = require(packageJSONPath).name;
  const metadataKey = Symbol.for(packageName);
  const globalSpace = global as { [metadataKey]?: string };
  const globalVersion = globalSpace[metadataKey];

  if (!globalVersion) {
    globalSpace[metadataKey] = ownVersion;
  } else if (globalVersion !== ownVersion) {
    console.warn(
      `[TypeGraphQL] Multiple versions of '${packageName}' package ` +
        `have been detected: v${globalVersion}, v${ownVersion}. ` +
        `Make sure your dependencies are in correct versions ` +
        `and run 'npm dedupe' or yarn's equivalent.`,
    );
  } else {
    console.warn(
      `[TypeGraphQL] The package '${packageName} v${ownVersion}' has initialized multiple times. ` +
        `Make sure you have your dependencies deduped ` +
        `and you don't have multiple entrypoints that can lead to this warning.`,
    );
  }
}
