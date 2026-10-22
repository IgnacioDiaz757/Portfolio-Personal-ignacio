export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/**
 * Se ejecuta en <head> antes de pintar la página para evitar el parpadeo.
 * El tema por defecto es el claro; solo se usa el oscuro si el visitante
 * lo eligió con el botón (queda guardado en localStorage).
 */
export const THEME_INIT_SCRIPT = `(function(){try{
var s=null;try{s=localStorage.getItem("${STORAGE_KEY}")}catch(e){}
document.documentElement.dataset.theme=s==="dark"?"dark":"light";
}catch(e){}})();`;

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function getServerTheme(): Theme {
  return "light";
}

export function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // modo privado o almacenamiento bloqueado: el cambio vale solo para esta visita
  }
}
