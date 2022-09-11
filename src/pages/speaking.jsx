import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Alpha Olomi</title>
        <meta
          name="description"
          content="I’ve spoken at few local events."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at few local events."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love workshops interviews because they give me the opportunity to share and learn at the same time."
      >
        <div className="space-y-20">
          <SpeakingSection title="Workshops">
            <Appearance
              href="https://www.youtube.com/watch?v=AmtiNCFv0jM"
              title="Openpesa - Mpesa Intergation"
              description="A technical deep-dive into Openpesa Mpesa TZ Intergration, a payments intergation toolkit I wrote for helping intergrating payments ."
              event="Openpesa + Yesaya Software"
              cta="Watch video"
            />
          </SpeakingSection>
         
        </div>
      </SimpleLayout>
    </>
  )
}
