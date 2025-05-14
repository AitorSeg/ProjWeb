// Interacción básica del FAQ: muestra/oculta respuestas al hacer clic
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isVisible = answer.style.display === 'block';

      // Cierra todas las respuestas primero
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

      // Muestra u oculta la respuesta correspondiente
      answer.style.display = isVisible ? 'none' : 'block';
    });
  });
});
