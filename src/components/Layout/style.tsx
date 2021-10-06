import styled from 'styled-components'
export const LayoutStyle = styled.div<{type}>`
&.container {
    display: grid;
    grid-template-columns: ${props =>
        props.type==='sm'?"repeat(auto-fill, minmax(275px, 1fr))":props.type==='md'?"repeat(auto-fill, minmax(500px, 1fr))":props.type==='lg'?"repeat(auto-fill, minmax(100%, 1fr))":"repeat(auto-fill, minmax(275px, 1fr))"}  ;
    grid-gap: 2rem;
    margin: 2rem;
    
    @media (max-width: 320px) {
        grid-template-columns: ${props =>
            props.type==='sm'?"repeat(auto-fill, minmax(100%, 1fr))":props.type==='md'?"repeat(auto-fill, minmax(100%, 1fr))":props.type==='lg'?"repeat(auto-fill, minmax(100%, 1fr))":"repeat(auto-fill, minmax(275px, 1fr))"}  ;
    }
  }
  
  
`
