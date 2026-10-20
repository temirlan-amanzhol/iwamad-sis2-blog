import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Without vitest globals Testing Library cannot clean up by itself,
// so every test starts with an empty page
afterEach(() => {
  cleanup()
})
