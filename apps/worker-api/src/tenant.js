
export async function withTenant(req, env){
  const tenantId = req.headers.get("X-Tenant-ID");
  if(!tenantId) throw new Error("Tenant ID required");

  // Each tenant mapped to its own DB
  const db = env[`DB_${tenantId}`];
  if(!db) throw new Error("Tenant DB not found");

  return { tenantId, db };
}
