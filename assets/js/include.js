document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  const loadIncludes = async () => {
    for (const element of includes) {
      const file = element.getAttribute("data-include"); // 例: "footer"
      const path = `includes/${file}.html`; // ファイルパスを組み立てる

      try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load ${path}`);
        const content = await response.text();
        element.outerHTML = content; // 要素全体を置き換える
      } catch (error) {
        console.error(error);
      }
    }

    // スクリプトをbody終了直前に追加
    const script = document.createElement("script");
    script.src = "assets/js/script.js";
    script.defer = true;
    document.body.appendChild(script);
  };

  loadIncludes();
});
