export const parseUtmParams = (utmString: string) => {
  if (!utmString) return "";

  const cleanedString = utmString.startsWith("?")
    ? utmString.substring(1)
    : utmString;

  const utmParams = cleanedString.split("&").reduce((acc, pair) => {
    const [key, value] = pair.split("=");
    if (key && value) {
      acc.push(`${decodeURIComponent(key)}: ${decodeURIComponent(value)}`);
    }
    return acc;
  }, [] as string[]);

  return utmParams.length > 0 ? utmParams.join("\n") + "\n" : "";
};
