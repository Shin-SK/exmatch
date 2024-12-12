document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");

    const loadPart = async (element) => {
        const file = element.getAttribute("data-include"); // 例: "header"
        const path = `includes/${file}.html`; // ファイルパスを組み立てる

        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Failed to load ${path}`);
            const content = await response.text();
            element.outerHTML = content; // 要素全体を置き換える
        } catch (error) {
            console.error(error);
        }
    };

    // 各data-include要素を処理
    includes.forEach((element) => loadPart(element));
});
