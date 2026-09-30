document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('like-btn');
    const countEl = document.getElementById('like-count');

    if (!btn || !countEl) {
      console.error('Кнопка или счётчик не найдены');
      return;
    }

    let likes = 0;
    let isLiked = false;

    btn.addEventListener('click', () => {
      if (!isLiked) {
        likes++;
        isLiked = true;
        btn.classList.add('liked');
      }
      countEl.textContent = likes;
    });
  });