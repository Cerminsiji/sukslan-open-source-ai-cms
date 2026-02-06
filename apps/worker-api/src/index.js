
import { withTenant } from "./tenant";
import { logAudit } from "./audit";

export default {
  async fetch(req, env){
    const tenant = await withTenant(req, env);
    await logAudit(req, env, tenant);

    return new Response("Sukslan Open Source Enterprise API");
  }
}
