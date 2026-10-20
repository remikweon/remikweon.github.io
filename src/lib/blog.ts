
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  html: string;
}

const modules = import.meta.glob<string>(
  "../posts/*.html",
  {
    query: "?raw",
    import: "default",
    eager: true,
  },
);

export const posts: BlogPost[] = Object.entries(modules)
  .map(([path, html]) => {
    const slug = path.split("/").pop()!.replace(".html", "");

    const document = new DOMParser().parseFromString(
      html,
      "text/html",
    );

    const article = document.querySelector("article");

    if (!article) {
      throw new Error(`Missing <article> in ${path}`);
    }

    article.querySelectorAll("img[src]").forEach((img) => {
    const src = img.getAttribute("src");

    if (src && !/^(https?:|data:|\/)/i.test(src)) {
        img.setAttribute(
        "src",
        `${import.meta.env.BASE_URL}${src}`,
        );
    }
    });

    return {
      slug,
      title: article.dataset.title ?? slug,
      date: article.dataset.date ?? "",
      description: article.dataset.description ?? "",
      tags: (article.dataset.tags ?? "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      html: article.innerHTML,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
