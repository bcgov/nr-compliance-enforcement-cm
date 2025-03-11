import { enforceLoginRoles } from '@/oidc'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/protectedByRole')({
  component: ProtectedByRolePage,
  beforeLoad: async () => {
    await enforceLoginRoles(['COS'])
    // If this line is reached, the user is logged in.
  },
})

function ProtectedByRolePage() {
  return <div>You have a valid role! 🤩</div>
}
