
// ===== 控制台欢迎（开发调试用） =====
console.log("🏗️ 宁夏建筑材料研究院（有限公司）官网已加载");

// ===== 导航栏滚动效果（后续完善） =====
// 这里先留空，后续可以添加滚动吸顶、平滑滚动等效果

// ===== 当前页面导航高亮（自动识别） =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
});