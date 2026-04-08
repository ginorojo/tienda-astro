import { supabase } from "./lib/supabase";
import type { MiddlewareHandler } from "astro";
export const onRequest: MiddlewareHandler = async ({ locals, url, cookies, redirect }, next) => {
  const pathname = url.pathname;
  
  // Solo proteger rutas que empiecen con /admin
  if (pathname.startsWith("/admin")) {
    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");

    if (!accessToken || !refreshToken) {
      return redirect("/signin");
    }

    try {
      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });

      if (error || !data.session) {
        cookies.delete("sb-access-token", { path: "/" });
        cookies.delete("sb-refresh-token", { path: "/" });
        return redirect("/signin");
      }

      // Guardar el usuario en locals por si se necesita en las páginas
      locals.user = data.user || undefined;
    } catch (err) {
      return redirect("/signin");
    }
  }

  return next();
}
