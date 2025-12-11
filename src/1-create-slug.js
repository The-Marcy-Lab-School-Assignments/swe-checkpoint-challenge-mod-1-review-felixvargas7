// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  if (title.includes("!") || title.includes("#") || title.includes("?")) {
    return null;
  }
  const trimSlug = title.trim("");
  const lowerCaseSlug = trimSlug.toLowerCase();
  const partsSlug = lowerCaseSlug.split(" ");
  const cleanSlug = [];
  for (let i = 0; i < partsSlug.length; i++) {
    if (partsSlug[i] !== "") {
      cleanSlug.push(partsSlug[i]);
    }
  }
  const formattedSlug = cleanSlug.join("-");
  return formattedSlug;
};
console.log(createSlug("Hello World"));
module.exports = {
  createSlug,
};
