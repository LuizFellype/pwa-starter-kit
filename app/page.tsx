import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Palette, BookOpen, Zap } from "lucide-react"
import { ThemeShowcase } from "@/components/theme-showcase"
import { Container } from "@/components/ui/container"
import { Text } from "@/components/ui/text"
import { InteractiveShowcase } from "@/components/interactive-showcase"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Container size="screen" padding="lg">
        <div className="text-center mb-12">

          <Text variant="title" as="h1" className="text-4xl mb-4">
            PWA Starter Kit
          </Text>
          <Text variant="description" className="text-xl max-w-2xl mx-auto">
            A comprehensive starter kit with PWA capabilities, themed components, and Storybook integration
          </Text>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="secondary">PWA Ready</Badge>
            <Badge variant="secondary">Dark/Light Theme</Badge>
            <Badge variant="secondary">Storybook</Badge>
            <Badge variant="secondary">TypeScript</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Smartphone className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>PWA Features</CardTitle>
              <CardDescription>Install on any device with offline support and native app experience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Installable app</li>
                <li>• Offline functionality</li>
                <li>• Push notifications</li>
                <li>• App-like experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Themed Components</CardTitle>
              <CardDescription>Complete component library with light and dark theme support</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Light/Dark themes</li>
                <li>• Consistent design</li>
                <li>• Accessible components</li>
                <li>• Customizable tokens</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Storybook Ready</CardTitle>
              <CardDescription>All components documented and showcased in Storybook</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Component stories</li>
                <li>• Interactive docs</li>
                <li>• Design tokens</li>
                <li>• Testing utilities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Developer Ready</CardTitle>
              <CardDescription>Modern tooling and best practices built-in</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• TypeScript support</li>
                <li>• Tailwind CSS</li>
                <li>• ESLint & Prettier</li>
                <li>• Hot reload</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <ThemeShowcase />

        <div className="mt-12">
          <InteractiveShowcase />
        </div>
      </Container>
    </div>
  )
}
