import { DriversHeader } from '@features/drivers/header'
import { DriverList } from '@features/drivers/list'
import { Container } from '@ui'
import { ModalDriverCreate } from '@widgets/drivers/ModalCreate'

export const App = () => {
  return (
    <Container>
      <DriversHeader />

      <DriverList />

      <ModalDriverCreate />
    </Container>
  )
}
