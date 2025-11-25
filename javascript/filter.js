document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.categoria');
  const cardsContainer = document.querySelector('.mais');
  const cards = Array.from(document.querySelectorAll('.mais .card'));

  function clearActiveCategories() {
    categories.forEach(c => c.classList.remove('active'));
  }

  function resetCards() {
    cardsContainer.classList.remove('filter-active');
    cards.forEach(card => {
      // remover todas as classes de estado para restaurar os cards
      card.classList.remove('match', 'not-match', 'hidden');
      card.style.order = '';
    });
  }

  function applyFilter(filter) {
    if (!filter) {
      resetCards();
      return;
    }

    cardsContainer.classList.add('filter-active');

    cards.forEach(card => {
      const cat = (card.dataset.category || '').toLowerCase();
      if (cat === filter) {
        card.classList.add('match');
        card.classList.remove('not-match', 'hidden');
        card.style.order = 0; // move to left
      } else {
        card.classList.remove('match');
        card.classList.add('hidden');
        card.style.order = 1; // keep after matches if needed
      }
    });
  }

  categories.forEach(catEl => {
    catEl.addEventListener('click', () => {
      const filter = (catEl.dataset.filter || '').toLowerCase();
      const isActive = catEl.classList.contains('active');

      if (isActive) {
        clearActiveCategories();
        resetCards();
        return;
      }

      clearActiveCategories();
      catEl.classList.add('active');
      applyFilter(filter);
    });
  });
});
