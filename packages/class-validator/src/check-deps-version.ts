async function getInstalledTypeGraphQLCoreVersion(): Promise<string> {
  const graphqlPackageJson = await import("@typegraphql/core/package.json");
  return graphqlPackageJson.version;
}

async function getTypeGraphQLCoreDependencyRequirement(): Promise<string> {
  const ownPackageJson = await import("../package.json");
  return ownPackageJson.dependencies["@typegraphql/core"];
}

export default async function ensureInstalledCorrectDepencenciesVersions(): Promise<
  void
> {
  const installedVersion = getInstalledTypeGraphQLCoreVersion();
  const versionRequirement = getTypeGraphQLCoreDependencyRequirement();

  if (installedVersion !== versionRequirement) {
    throw new Error("TODO: error message");
  }
}
