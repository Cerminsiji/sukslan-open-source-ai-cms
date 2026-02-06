
export async function logAudit(req, env, tenant){
  const record = {
    tenant: tenant.tenantId,
    path: new URL(req.url).pathname,
    method: req.method,
    timestamp: new Date().toISOString()
  };

  await tenant.db.prepare(
    "INSERT INTO audit_log (event) VALUES (?)"
  ).bind(JSON.stringify(record)).run();
}
