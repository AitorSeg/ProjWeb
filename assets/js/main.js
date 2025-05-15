document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isVisible = answer.classList.contains('show');

      // Oculta todas las respuestas
      document.querySelectorAll('.faq-answer').forEach(a => {
        a.classList.remove('show');
      });

      // Si no estaba visible, muéstrala
      if (!isVisible) {
        answer.classList.add('show');
      }
    });
  });
});
