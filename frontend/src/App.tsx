import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardShell } from './components/layout/DashboardShell';
import { AIToolsPage } from './pages/AIToolsPage';
import { AIWorkspacePage } from './pages/AIWorkspacePage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { GitHubIntegrationPage } from './pages/GitHubIntegrationPage';
import { HistoryPage } from './pages/HistoryPage';
import { LandingPage } from './pages/LandingPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { RepositoryAnalysisPage } from './pages/RepositoryAnalysisPage';
import { SettingsPage } from './pages/SettingsPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardShell><DashboardPage /></DashboardShell>} />
      <Route path="/ai-tools" element={<DashboardShell><AIToolsPage /></DashboardShell>} />
      <Route path="/workspace" element={<DashboardShell><AIWorkspacePage /></DashboardShell>} />
      <Route path="/github" element={<DashboardShell><GitHubIntegrationPage /></DashboardShell>} />
      <Route path="/repo-analysis" element={<DashboardShell><RepositoryAnalysisPage /></DashboardShell>} />
      <Route path="/projects" element={<DashboardShell><ProjectsPage /></DashboardShell>} />
      <Route path="/history" element={<DashboardShell><HistoryPage /></DashboardShell>} />
      <Route path="/settings" element={<DashboardShell><SettingsPage /></DashboardShell>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
