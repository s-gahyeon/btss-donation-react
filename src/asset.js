/* Resolve a public-folder asset against Vite's base URL so it works both
   in local dev and on the GitHub Pages subpath. Pass a path WITHOUT a
   leading slash, e.g. asset("photos/avatar.jpg"). */
export const asset = (path) => import.meta.env.BASE_URL + path;
