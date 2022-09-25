import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '../../components/UI/Button'
import { Primary } from '../../components/UI/PrimaryText'

export default function Profile() {
  const { data: session } = useSession()

  return (
    <section
      style={{
        height: '60vh',
        paddingTop: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {session && (
        <>
          <h1 style={{ fontSize: 50 }}>
            <Primary>{session?.user?.name}</Primary>
          </h1>

          <Button style={{ width: 150, height: 30 }} onClick={() => signOut()}>
            Sign Out
          </Button>
        </>
      )}

      {!session && (
        <Button style={{ width: 150, height: 30 }} onClick={() => signIn()}>
          Sign In
        </Button>
      )}
    </section>
  )
}
