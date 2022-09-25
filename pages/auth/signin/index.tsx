import { getProviders, signIn, useSession } from 'next-auth/react'
import type { Provider } from 'next-auth/providers'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Button } from '../../../components/UI/Button'

export type Props = {
  providers: Provider[]
}

export default function SignIn({ providers }: Props) {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.user) {
      router.push('/profile')
    }
  })

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
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button
            style={{ width: 150, height: 30 }}
            onClick={() => signIn(provider.id)}
          >
            With {provider.name}
          </Button>
        </div>
      ))}
    </section>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
