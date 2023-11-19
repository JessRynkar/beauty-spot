import { Button } from '../_components/Button'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'

export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="large" bottom="large">
        <h1 style={{ marginTop: '100px', marginBottom: 0 }}>Page not found</h1>
        <p>Uh oh, nothing exists here...</p>
        <Button href="/" label="Return Home" appearance="primary" />
      </VerticalPadding>
    </Gutter>
  )
}
