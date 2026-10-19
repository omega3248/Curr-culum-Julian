// The portfolio owns project content; both print and PDF generation reuse it.
export function syncCvFromPortfolio(source, target) {
  const projects = [...source.querySelectorAll('#proyectos article.project')];
  const container = target.getElementById('cv-projects');
  if (!projects.length || !container) throw new Error('No se encontraron los proyectos del portafolio.');

  const articles = projects.map(project => {
    const article = target.createElement('article');
    const heading = target.createElement('h3');
    heading.textContent = project.dataset.cvTitle || project.querySelector('h3').textContent;
    const summary = target.createElement('p');
    summary.textContent = project.dataset.cvSummary || project.querySelector('.project-content > p').textContent;
    article.append(heading, summary);
    const repository = project.querySelector('.project-note a[href^="https://github.com/"]');
    if (repository) {
      const link = target.createElement('a');
      link.href = repository.getAttribute('href');
      link.textContent = link.href.replace('https://', '');
      article.append(link);
    }
    return article;
  });
  container.replaceChildren(...articles);

  const photo = source.querySelector('.profile-photo');
  const cvPhoto = target.querySelector('.resume-photo');
  if (photo && cvPhoto) {
    cvPhoto.src = photo.getAttribute('src');
    cvPhoto.alt = photo.alt;
  }
  return articles.length;
}
