import { formatNumber } from "../utils/format"

import Title from "../components/common/Title"
import Button from "../components/common/Button"

const COUNT = 1000;


export default function Home() {
  return (
    <div>
      <Title size="large">Book Store</Title>
      <Button size="large" scheme="primary" disabled={false} isLoading={false}>Primary Button</Button>
      <div>count: {formatNumber(COUNT)}</div>
    </div>
  )
}