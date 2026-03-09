export const getHistory = async (_req, res) => {
  res.json([
    {
      toolUsed: 'AI Debug Assistant',
      timestamp: new Date().toISOString(),
      promptPreview: 'Fix null reference in auth flow',
      responsePreview: 'Suggested guard clauses and unit tests.'
    }
  ]);
};
