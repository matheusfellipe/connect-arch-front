import styled from "styled-components"


type Props = {}

const OrderContainer = styled.div`
    display: flex;
    justify-content: center;
`

const OrderPage = (props: Props) => {
  return (
    <OrderContainer>
        <h1>
            Order Page
        </h1>
    </OrderContainer>
  )
}

export default OrderPage