const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';
const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  // Force demo mode
  if (USE_MOCK) {
    throw new Error('DEMO_MODE'); // Triggers mock fallback
  }

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
      ...options,
    });

    if (!res.ok) throw new Error(`API Error: ${res.status}`);

    return res.json();
  } catch (error) {
    // Auto fallback to demo mode on connection failure
    console.warn('Backend not available. Switching to Demo Mode.');
    throw new Error('DEMO_MODE');
  }
}