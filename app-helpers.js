(function attachCAEHelpers(globalScope) {
  const MAX_SEARCH_LENGTH = 80;
  const MAX_PROJECT_FILE_SIZE_BYTES = 15 * 1024 * 1024;
  const MIN_REQUEST_FILL_TIME_MS = 2500;
  const MAX_QUOTE_ITEMS = 40;
  const MAX_ITEM_QTY = 999;
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

  function sanitizeQuoteItems(items) {
    if (!Array.isArray(items)) return [];

    return items
      .slice(0, MAX_QUOTE_ITEMS)
      .map((item) => {
        const rawId = String(item?.id ?? "");
        const id = rawId.replace(/[^a-z0-9_-]/gi, "").slice(0, 80);
        const qty = Math.max(1, Math.min(MAX_ITEM_QTY, Number(item?.qty) || 1));
        if (!id || id !== rawId) return null;
        return { id, qty };
      })
      .filter(Boolean);
  }

  function getSkeletonCardCount(viewportWidth) {
    const width = Number(viewportWidth || 0);
    if (width <= 620) return 3;
    if (width <= 1040) return 4;
    return 6;
  }

  const helpers = {
    MAX_PROJECT_FILE_SIZE_BYTES,
    MIN_REQUEST_FILL_TIME_MS,
    MAX_QUOTE_ITEMS,
    MAX_ITEM_QTY,
    sanitizeQuoteItems,
    getSkeletonCardCount,
    sanitizeCatalogState,
    shouldTrapBotSubmission,
    validateProjectFile
  };

  globalScope.CAEHelpers = helpers;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = helpers;
  }
})(typeof window !== "undefined" ? window : globalThis);
