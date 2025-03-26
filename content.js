document.querySelectorAll('.solution-title').forEach(title => {
    // 检查标题文本是否包含 "解析视频"
    if (title.textContent.includes('解析视频')) {
        // 向上查找最近的父级 section 元素并删除
        const section = title.closest('section.result-common-section');
        section?.remove();
    }
});