import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
      <ToolsSection title="Workstation">
        <Tool title="HP Victus Gaming PC, i7 7th Gen, 32GB RAM, 1TB SSD">
            Prior, I used a Macbook Pro '17 , Added Victus to the mix 
            </Tool>
            <Tool title="HP 27F FHD (2018)">
            I didn't want to dual boot OS's  thus added another PC to facilitate Linux distros.
            </Tool>
        
        <Tool title="13' MacBook Pro, i5, 8GB RAM (2017)">
            Prior, I used a Dell Inspiron 7000 with Manjaro Distro, the main difference is the MacOS convenience              
            </Tool>
            <Tool title="HP 27F FHD (2018)">
              I use one monitor for now, but I’m planning on getting a second one. <br/>
               Due to heavy usage it died, motherboard fried, moed to next.
            </Tool>
           
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Sublime Text 4">
              I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on. Sublime Text is fast, lightweight.               
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use. 
            </Tool>
            <Tool title="TablePlus (Free version)">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years. 
            </Tool>
          </ToolsSection>    
      </div>
    </SimpleLayout>
  )
}
