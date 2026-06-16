(function attachCAEHelpers(globalScope) {
  const MAX_SEARCH_LENGTH = 80;
  const MAX_PROJECT_FILE_SIZE_BYTES = 15 * 1024 * 1024;
  const MIN_REQUEST_FILL_TIME_MS = 2500;
  const ALLOWED_SORTS = new Set(["popular", "name", "voltage"]);

  function normalizeText(value, maxLength) {
    return String(value ?? "")
      .replace(/[\u0000-\u001f\u007f]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, maxLength);
  }

  function sanitizeSearch(value, fallback = "") {
    const normalized = normalizeText(value, MAX_SEARCH_LENGTH);
    if (!normalized || /[<>]/.test(normalized)) return fallback;
    return normalized;
  }

  function sanitizeChipValue(value, fallback) {
    if (typeof value !== "string") return fallback;
    const normalized = normalizeText(value, 48);
    if (!normalized || /[<>]/.test(normalized)) return fallback;
    return normalized;
  }

  function sanitizeCatalogState(rawState, defaults) {
    const source = rawState && typeof rawState === "object" ? rawState : {};

    return {
      section: sanitizeChipValue(source.section, defaults.section),
      group: sanitizeChipValue(source.group, defaults.group),
      conductor: sanitizeChipValue(source.conductor, defaults.conductor),
      search: sanitizeSearch(source.search, defaults.search),
      sort: ALLOWED_SORTS.has(source.sort) ? source.sort : defaults.sort
    };
  }

  function shouldTrapBotSubmission({ honeypotValue, elapsedMs }) {
    const honeypot = normalizeText(honeypotValue, 160);
    return Boolean(honeypot) || Number(elapsedMs || 0) < MIN_REQUEST_FILL_TIME_MS;
  }

  function validateProjectFile(file, maxBytes = MAX_PROJECT_FILE_SIZE_BYTES) {
    if (!file || !file.name || !Number(file.size || 0)) {
      return { ok: true, reason: "" };
    }

    if (Number(file.size) > maxBytes) {
      return { ok: false, reason: "Файл проекта слишком большой. Максимум 15 МБ." };
    }

    return { ok: true, reason: "" };
  }

  const helpers = {
    MAX_PROJECT_FILE_SIZE_BYTES,
    MIN_REQUEST_FILL_TIME_MS,
    sanitizeCatalogState,
    shouldTrapBotSubmission,
    validateProjectFile
  };

  globalScope.CAEHelpers = helpers;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = helpers;
  }
})(typeof window !== "undefined" ? window : globalThis);
