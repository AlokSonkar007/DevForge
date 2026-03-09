export const getRepos = async (_req, res) => {
  res.json([
    { repoName: 'devforge-core', description: 'Core platform', language: 'TypeScript', stars: 120 },
    { repoName: 'backend-utils', description: 'Service helpers', language: 'JavaScript', stars: 80 }
  ]);
};

export const analyzeRepo = async (req, res) => {
  const { repoName = 'unknown' } = req.body || {};
  res.json({
    repoName,
    fileStructure: ['src/', 'docs/', 'tests/'],
    technologies: ['React', 'Node.js', 'Prisma'],
    architecture: 'Layered frontend/backend architecture with PostgreSQL persistence.',
    improvements: ['Increase test coverage', 'Add CI checks']
  });
};
