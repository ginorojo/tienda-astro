globalThis.process ??= {}; globalThis.process.env ??= {};
import { s as supabase } from './chunks/supabase_C7auxTPX.mjs';
import './chunks/astro-designed-error-pages_CMS8v1Ao.mjs';
import './chunks/astro/server_BMPoQNKY.mjs';
import { s as sequence } from './chunks/index_CfgOXsPq.mjs';

const onRequest$2 = async ({ locals, url, cookies, redirect }, next) => {
  const pathname = url.pathname;
  if (pathname.startsWith("/admin")) {
    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");
    if (!accessToken || !refreshToken) {
      return redirect("/signin");
    }
    try {
      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value
      });
      if (error || !data.session) {
        cookies.delete("sb-access-token", { path: "/" });
        cookies.delete("sb-refresh-token", { path: "/" });
        return redirect("/signin");
      }
      locals.user = data.user || void 0;
    } catch (err) {
      return redirect("/signin");
    }
  }
  return next();
};

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };
