const placeholder = (tool) => async (req, res) => {
  const { prompt = '', code = '' } = req.body || {};
  res.json({ tool, prompt, codeSnippet: String(code).slice(0, 200), result: 'AI integration ready placeholder response.' });
};

export const codeAssistant = placeholder('code-assistant');
export const debugAssistant = placeholder('debug');
export const projectArchitect = placeholder('project-architect');
export const docsGenerator = placeholder('docs-generator');
export const testGenerator = placeholder('test-generator');
